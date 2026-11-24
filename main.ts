import { mkdirSync, writeFileSync } from "node:fs";

// Fortune in a Pot — a kind, funny fortune for the houseplant on the windowsill.
// The fortune is a single line of at most 120 characters, written as a prediction
// for the plant itself: specific to this window, warm to plant and keeper, and
// with the surprise saved for the last few words. The gate counts it valid only
// if it is 1–120 UTF-8 characters and not only whitespace, so the text is kept
// plain: no trailing newline, no extra formatting, exactly the fortune.
const FORTUNE =
  "The sun through this window has chosen you: a new leaf by Thursday, and a human who finally waters on time.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", FORTUNE, "utf8");
