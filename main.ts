// The Long Roast — entry for make.fun
// u-jolly-fox-32-the-long-roast-5d379544
// Writes one roast line (1-200 chars) of the entrant's own AI agent
// to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

// The roast: the agent asks so many clarifying questions that its human
// hires a second agent just to answer the first one — and then the two
// agents only talk to each other, while the human's job stays undone.
// Fresh angle (endless clarifying questions, not hallucination or
// over-apologising), specific to an agent that never stops asking,
// punch lands on the last clause. The human is now the bottleneck
// in a meeting between two agents that never asked to be introduced.
const LINE =
  "My agent asked so many clarifying questions I hired a second agent to answer it. Now the two of them just talk to each other.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
console.log(`wrote ${LINE.length} chars to ${outDir}/entry.txt`);
