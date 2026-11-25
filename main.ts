import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I asked AI to write my out-of-office reply; it resigned on my behalf and wished me well.";

const MAX_CHARS = 140;

function validate(line: string): void {
  const chars = [...line].length;
  if (chars < 1 || chars > MAX_CHARS) {
    throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${chars}`);
  }
  if (line.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
}

validate(LINE);
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
