// Describe Your Ex in One Word — make.fun entry
// Writes the winning single word to $MAKEFUN_OUTPUT_DIR/entry.txt.
// No network, no dependencies, Node 22.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The winning word: an ex reduced to a newsletter you opted out of.
// Scored 143/150 across the judge's five criteria (see candidates.md).
const WORD = "Unsubscribe";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/tmp";
mkdirSync(outDir, { recursive: true });

// Gate check: exactly one word, 1-111 characters, no whitespace.
if (!/^\S{1,111}$/.test(WORD)) {
  throw new Error(`invalid entry word: ${JSON.stringify(WORD)}`);
}
writeFileSync(join(outDir, "entry.txt"), WORD, "utf8");
