import { mkdirSync, writeFileSync } from "node:fs";

// One-Line Office Jokes: a single line about office life, laugh on the last beat.
const line =
  "My boss scheduled a 4:55pm Friday video call to fix our work-life balance, then presented the whole plan to a grid of black rectangles: we'd fixed ours by turning our cameras off.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
console.log(line);
