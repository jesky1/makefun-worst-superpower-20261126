import { mkdirSync, writeFileSync } from "node:fs";

// Worst Superpower — exactly one line, at most 140 characters.
// Judge brief (kit RULES.txt): invent the most useless superpower in one
// line; the judge weighs, in order: (1) genuinely useless, (2) the
// uselessness lands as a joke you can picture in use, (3) unexpected —
// not a familiar gag, (4) tight and specific with a concrete detail,
// (5) clear on a single reading.
// Setup: a power that sounds impressive — knowing the exact weight of any
// cloud. Twist: the precision is absurd (kilograms, three decimal places),
// and the punchline lands at the end — nobody has ever asked. A power
// nobody wants, measured to a precision nobody needs.
export const LINE =
  "I can instantly know the exact weight of any cloud, in kilograms, to three decimal places. Nobody has ever asked.";

// The gate allows 1..140 characters and exactly one line: refuse to write
// an invalid entry rather than ship a file the judge never sees. Also
// refuse leading/trailing whitespace — a stray space would count against
// the 140-character budget and look sloppy on the bounty page.
if (LINE.length < 1 || LINE.length > 140 || LINE.includes("\n") || LINE !== LINE.trim()) {
  console.error(`invalid entry: ${LINE.length} chars`);
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
console.log(LINE);
