import DottedDivider from "./DottedDivider";

export default function SnapshotsDivider() {
  return (
    <section className="px-16">
      <div className="grid grid-cols-[1fr_auto] items-center gap-24">
        <DottedDivider />
        <div className="w-[170px]" />
      </div>
    </section>
  );
}