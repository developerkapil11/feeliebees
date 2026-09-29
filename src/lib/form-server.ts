import { createHash } from "node:crypto";

export class FormError extends Error {
  constructor(message: string, public status = 400) { super(message); }
}

export async function readForm(request: Request): Promise<Record<string, unknown>> {
  const origin = request.headers.get("origin");
  // Next's URL can contain the bind address (0.0.0.0) during development.
  // The incoming Host identifies the address the visitor actually used.
  const requestUrl = new URL(request.url);
  const expectedOrigin = process.env.NEXT_PUBLIC_SITE_URL
    ? new URL(process.env.NEXT_PUBLIC_SITE_URL).origin
    : `${requestUrl.protocol}//${request.headers.get("host") || requestUrl.host}`;
  if (origin && origin !== expectedOrigin) throw new FormError("Please submit this form from the FeelieBees website.", 403);
  if (!request.headers.get("content-type")?.includes("application/json")) throw new FormError("Please send a valid form.", 415);
  const reader = request.body?.getReader();
  if (!reader) throw new FormError("Please complete the form.");
  let size = 0;
  const chunks: Uint8Array[] = [];
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    size += value.byteLength;
    if (size > 16000) { await reader.cancel(); throw new FormError("Your message is too long. Please shorten it and try again.", 413); }
    chunks.push(value);
  }
  let body;
  try { body = JSON.parse(Buffer.concat(chunks).toString("utf8")); } catch { throw new FormError("Please send a valid form."); }
  if (!body || typeof body !== "object" || Array.isArray(body)) throw new FormError("Please send a valid form.");
  if (body.website) throw new FormError("We couldn’t accept this submission. Please try again.");
  return body;
}

export function textField(value: unknown, label: string, min: number, max: number) {
  if (typeof value !== "string" || value.trim().length < min || value.trim().length > max || /\x00/.test(value)) throw new FormError(`Please enter a valid ${label}.`);
  return value.trim();
}
export function emailField(value: unknown) {
  const email = textField(value, "email address", 3, 254).toLowerCase();
  if (!/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(email)) throw new FormError("Please enter a valid email address.");
  return email;
}

// Bounded, short-lived limits for this server instance; put shared limits at the edge when scaling.
const limits = new Map<string, { count: number; until: number }>();
export function limitSubmission(request: Request, email: string, purpose: string) {
  const now = Date.now();
  for (const [key, entry] of limits) if (entry.until < now) limits.delete(key);
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0].trim() || "local";
  const keys = [`${purpose}:ip:${ip}`, `${purpose}:email:${email}`].map(value => createHash("sha256").update(value).digest("hex"));
  if (limits.size > 5000 || keys.some(key => (limits.get(key)?.count || 0) >= 8)) throw new FormError("A few too many requests. Please try again in 15 minutes.", 429);
  for (const key of keys) { const entry = limits.get(key) || { count: 0, until: now + 15 * 60 * 1000 }; entry.count++; limits.set(key, entry); }
}

export function formFailure(error: unknown) {
  if (error instanceof FormError) return Response.json({ error: error.message }, { status: error.status });
  return Response.json({ error: "We couldn’t send this right now. Please try again a little later." }, { status: 503 });
}
