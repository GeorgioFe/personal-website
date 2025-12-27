import fs from "fs";
import path from "path";
import type { Snapshot } from "@/lib/types";

export function getSnapshots(): Snapshot[] {
  const dir = path.join(process.cwd(), "public", "snapshots");
  const files = fs
    .readdirSync(dir)
    .filter((file) => /\.(png|jpe?g|webp|gif|avif)$/i.test(file));

  return files.map((file) => ({
    src: `/snapshots/${file}`,
    alt: path.parse(file).name.replace(/[-_]+/g, " "),
  }));
}
