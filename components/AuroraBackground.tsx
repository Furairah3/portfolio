export default function AuroraBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#050611]" aria-hidden="true">
      {/* Faint circuit-grid texture — reads as "tech" without being loud */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.6) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }}
      />

      <div className="absolute -left-1/4 -top-1/4 h-[62vw] w-[62vw] animate-blob1 rounded-full bg-aurora-blue/30 blur-[140px]" />
      <div className="absolute -right-1/4 top-0 h-[58vw] w-[58vw] animate-blob2 rounded-full bg-aurora-violet/30 blur-[140px]" />
      <div className="absolute bottom-[-22%] left-1/4 h-[52vw] w-[52vw] animate-blob3 rounded-full bg-indigo-500/20 blur-[140px]" />

      {/* Subtle "stars" — sparse, low opacity, purely decorative */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(1.5px 1.5px at 20% 30%, rgba(255,255,255,0.5) 100%, transparent), radial-gradient(1.5px 1.5px at 70% 65%, rgba(255,255,255,0.4) 100%, transparent), radial-gradient(1px 1px at 40% 80%, rgba(255,255,255,0.3) 100%, transparent), radial-gradient(1px 1px at 90% 15%, rgba(255,255,255,0.35) 100%, transparent), radial-gradient(1.5px 1.5px at 55% 45%, rgba(255,255,255,0.3) 100%, transparent)',
          backgroundSize: '100% 100%',
        }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#050611_92%)]" />
    </div>
  );
}
