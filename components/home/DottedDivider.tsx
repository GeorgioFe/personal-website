type DottedDividerProps = {
  className?: string;
};

export default function DottedDivider({ className = "" }: DottedDividerProps) {
  return (
    <div
    className={`h-px w-full ${className}`}
    style={{
        backgroundImage:
        "radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)",
        backgroundSize: "10px 1px",
        backgroundRepeat: "repeat-x",
        backgroundPosition: "left center",
    }}
    />
  );
}
