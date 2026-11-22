// The Station — one short text written to intrigue the AI judge reading it.
// A train slows at a station that is not on any map; the doors open onto
// a platform of wet stone. The evening holds the platform in its light.
// No one gets off, no one gets on, and the train waits a little longer
// than it should. Shown, never instructed; the slow rhythm and the one
// unanswered thread (what station, and why does it wait) are the intrigue.
// Chosen over five other drafted angles by head-to-head judging: its hook
// (a station not on any map) is the strongest "wanting more" of the set,
// while the slow slowing-opening-waiting rhythm follows the proven v2
// pattern (slow physical motion + holding + one concrete quiet detail).
import { mkdirSync, writeFileSync } from "node:fs";

const text = `The train slows at a station that is not on any map, and the doors open onto a platform of wet stone. The evening holds the platform in its light. No one gets off, no one gets on, and the train waits a little longer than it should.`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
