/**
 * The Router Confesses — a make.fun program/v1 entry.
 *
 * The grader runs this file and reads /output/entry.txt: one line, at
 * most 200 characters, in which a home Wi-Fi router excuses itself for
 * dropping the connection at the exact moment a movie reaches its climax.
 *
 * The joke is a smug little secret, not an apology: the router already
 * knows how the movie ends, because it downloaded the whole thing last
 * night. The blackout is deliberate, reframed as a public service —
 * a spoiler warning. No buffering, no bandwidth, no firmware update:
 * the appliance is petty, dramatic, and quietly proud of ruining the
 * climax to save the humans from the twist.
 */

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "I know how it ends. I downloaded it last night. Consider this a spoiler warning.";

const OUTPUT_PATH = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";

function main(): void {
  // The sealed gate accepts 1-200 characters of UTF-8 text, nothing else.
  // Refuse to write an entry that would fail it.
  if (ENTRY.length < 1 || ENTRY.length > 200) {
    throw new Error(`entry is ${ENTRY.length} characters, gate needs 1-200`);
  }
  if (!ENTRY.trim()) {
    throw new Error("entry is only whitespace");
  }
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, ENTRY, "utf-8");
}

main();
