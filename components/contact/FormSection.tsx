import Form from "./Form";

export default function FormSection() {
  return (
    <section>
      <h3 className="text-lg text-white font-normal">Message Me</h3>
      <div className="mt-6 h-[337px] w-full">
        <Form />
      </div>
    </section>
  );
}
