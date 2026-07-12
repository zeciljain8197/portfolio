export default function BackgroundBlobs() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute -top-40 -left-32 h-96 w-96 rounded-full bg-primary/20 blur-[120px]" />
      <div className="absolute top-1/3 -right-32 h-[28rem] w-[28rem] rounded-full bg-accent/15 blur-[140px]" />
      <div className="absolute bottom-0 left-1/4 h-80 w-80 rounded-full bg-primary/10 blur-[130px]" />
    </div>
  );
}
