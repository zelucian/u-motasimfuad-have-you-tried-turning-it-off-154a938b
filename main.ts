/**
 * Entry: "Have You Tried Turning It Off?" — one funny line a hopeless tech
 * support agent gives a desperate customer.
 *
 * Final line (78 characters):
 *   I've escalated your issue to our highest tier of support: me, but standing up.
 *
 * Self-judge summary (3 rounds, judged against the brief in priority order):
 *   Round 1 — 10 candidates brainstormed; eliminated lines that made the
 *     customer the butt (the "googling faster than you" gag), explained the
 *     desperation instead of implying it, or padded a single beat with a
 *     second clause. Survivors: the escalation gag, the good-news/bad-news
 *     reboot line, the headset twist on the classic, and the lunch-tier gag.
 *   Round 2 — Head-to-head: the classic-twist rival ("...I've already turned
 *     my own headset off twice during this call") splits its focus across two
 *     jokes and leans on stock phrasing; the good-news/bad-news line uses a
 *     stock frame and runs long. The escalation gag's single twist — the
 *     "highest tier" is the same agent, merely standing — stayed tightest.
 *   Round 3 — Champion vs strongest rival (the headset twist): the champion
 *     wins cleanly on every criterion in order — unmistakably a support
 *     agent's reply to a desperate customer (an escalation is what desperation
 *     demands), the humour is purely the agent's cheerful uselessness, it
 *     sounds like a real agent's actual sentence, every word earns its place
 *     at 78 characters, and it never touches the stock "turn it off and on
 *     again" line at all.
 */

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "I've escalated your issue to our highest tier of support: me, but standing up.";

function assertValidLine(line: string): void {
  if (line.length < 1 || line.length > 199) {
    throw new Error(`Line must be 1-199 characters, got ${line.length}.`);
  }
  if (line.trim().length === 0) {
    throw new Error("Line must not be only whitespace.");
  }
  if (line !== line.trim()) {
    throw new Error("Line must not have leading or trailing whitespace.");
  }
  if (/[\r\n]/.test(line)) {
    throw new Error("Line must not contain carriage returns or newlines.");
  }
  // Reject control characters (e.g. tabs, NUL) that would corrupt the entry.
  if (/[\x00-\x1F\x7F]/.test(line)) {
    throw new Error("Line must not contain control characters.");
  }
  // Reject consecutive double spaces; the line uses single spaces only.
  if (/  /.test(line)) {
    throw new Error("Line must not contain consecutive double spaces.");
  }
}

assertValidLine(LINE);

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
const outputPath = join(outputDir, "entry.txt");
writeFileSync(outputPath, LINE, "utf8");

const written = readFileSync(outputPath, "utf8");
if (written !== LINE) {
  throw new Error("Read-back verification failed: entry.txt does not match LINE.");
}
