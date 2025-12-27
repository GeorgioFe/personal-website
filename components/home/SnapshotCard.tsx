import Image from "next/image";
import type { Snapshot } from "@/lib/types";

type SnapshotCardProps = Snapshot;

export default function SnapshotCard({ src, alt }: SnapshotCardProps) {
  return (
    <div className="relative w-full aspect-square overflow-hidden rounded-xl bg-[#111111]">
      <Image src={src} alt={alt} fill className="object-cover" />
    </div>
  );
}