type Email = { to: string; subject: string; text: string; reply_to?: string; attachments?: { filename: string; content: string }[] };

/** Resend's REST API; no provider SDK or credentials are sent to the browser. */
export async function sendEmail(email: Email, transport: typeof fetch = fetch) {
  const key = process.env.RESEND_API_KEY;
  const from = process.env.EMAIL_FROM;
  if (!key || !from) throw new Error("Email delivery is unavailable.");
  const response = await transport("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({ from, ...email }),
    signal: AbortSignal.timeout(15000),
  });
  if (!response.ok) throw new Error("The email provider could not accept the message.");
  const result = await response.json();
  if (typeof result.id !== "string") throw new Error("The email provider did not confirm the message.");
  return result.id as string;
}
