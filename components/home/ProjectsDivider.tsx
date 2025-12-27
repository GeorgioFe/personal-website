import DottedDivider from "./DottedDivider";
import Button from "./Button";

export default function ProjectsDivider() {
  return (
    <section className="px-16">
        <div className="flex items-center gap-24">
            <DottedDivider className="flex-1" />
            <Button title="View All Projects" href="/projects" />
        </div>
    </section>
  );
}