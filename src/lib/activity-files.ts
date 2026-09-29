import { readFile } from "node:fs/promises";
import path from "node:path";

export async function kindnessPdf() {
  // Fixed, private file path: request input is never used as a filesystem path.
  return readFile(path.join(process.cwd(), "private", "activities", "kindness.pdf"));
}
