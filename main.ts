import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// One line of office comedy: the Wi-Fi password chase, escalating
// from a sticky note to a meeting room booked until Friday.
const joke =
  "The Wi-Fi password is on a sticky note. " +
  "The sticky note is on the fridge. " +
  "The fridge is in the meeting room. " +
  "The meeting room is booked until Friday.";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = join(here, "output");
mkdirSync(outDir, { recursive: true });

// The entry is exactly this one line, no trailing newline.
writeFileSync(join(outDir, "entry.txt"), joke, "utf8");
console.log(`Wrote ${joke.length} characters to output/entry.txt`);
