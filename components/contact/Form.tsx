export default function Form() {
  return (
    <div className="flex flex-col gap-3">
      <div className="grid gap-3 md:grid-cols-2">
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="h-[54] w-full rounded-xl border-2 border-transparent bg-[#1a1a1a] px-4 py-3 text-sm text-neutral-200 placeholder:text-neutral-500 focus:outline-none focus-visible:outline-none brand-gradient-focus"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full rounded-xl border-2 border-transparent bg-[#1a1a1a] px-4 py-3 text-sm text-neutral-200 placeholder:text-neutral-500 focus:outline-none focus-visible:outline-none brand-gradient-focus"
        />
      </div>

      <textarea
        name="message"
        placeholder="Write a message..."
        className="min-h-40 w-full resize-none rounded-xl border-2 border-transparent bg-[#1a1a1a] px-4 py-3 text-sm text-neutral-200 placeholder:text-neutral-500 focus:outline-none focus-visible:outline-none brand-gradient-focus"
      />

      <button
        type="button"
        className="w-full rounded-xl brand-gradient-bg px-6 py-4 text-sm text-black transition-transform duration-200 focus-visible:outline-none focus-visible:ring-2"
      >
        Send Message
      </button>
    </div>
  );
}
