export default function AuroraBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[#f4f5fb] dark:bg-[#05060f]" />
      <div className="absolute -left-1/4 -top-1/4 h-[60vw] w-[60vw] animate-blob1 rounded-full bg-aurora-blue/40 blur-[120px] dark:bg-aurora-blue/25" />
      <div className="absolute -right-1/4 top-0 h-[55vw] w-[55vw] animate-blob2 rounded-full bg-aurora-pink/35 blur-[120px] dark:bg-aurora-violet/25" />
      <div className="absolute bottom-[-20%] left-1/4 h-[50vw] w-[50vw] animate-blob3 rounded-full bg-aurora-teal/35 blur-[120px] dark:bg-aurora-teal/20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#f4f5fb_90%)] dark:bg-[radial-gradient(ellipse_at_center,transparent_0%,#05060f_90%)]" />
    </div>
  );
}
