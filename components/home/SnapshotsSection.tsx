import SnapshotCard from "./SnapshotCard";
import { getSnapshots } from "@/lib/utils/snapshotUtils";

const snapshots = getSnapshots();

export default function SnapshotsSection() {
  return (
    <section className="px-16 py-20">
      <h3 className="text-2xl text-[#E6E6E6]">Snapshots</h3>

      <div className="mt-20 overflow-clip">
        <div className="flex w-max gap-6 animate-snapshots-marquee">
          {[...snapshots, ...snapshots].map((item, index) => (
            <div key={`${item.src}-${index}`} className="w-[300px]">
              <SnapshotCard src={item.src} alt={item.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
