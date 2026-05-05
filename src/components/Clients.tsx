const clients = [
  "Joyalukkas", "Intergrow", "Jaguar", "JM Apartments", "MAMS", "VIVID", "Silky", "BHIMA",
  "WeMart", "Indian Cooperative", "Hotel Dewland", "Mootians", "Sana", "Al-Azhar", "Trinity", "HiTech",
  "Kerala Bank", "Federal", "SBI", "ICICI", "Apollo", "KIMS", "Lulu Mall", "Centre Square",
];

export function Clients() {
  const doubled = [...clients, ...clients];
  return (
    <section className="py-24 px-[5%] bg-background overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-[10px] tracking-[4px] uppercase text-brand mb-3 flex items-center gap-3">Our Portfolio<span className="flex-1 max-w-10 h-px bg-brand" /></div>
        <h2 className="font-display text-[clamp(38px,5vw,68px)] tracking-wider leading-none mb-5">Prestigious <span className="text-brand">Clients</span></h2>
        <p className="text-muted-foreground max-w-xl mb-12">Trusted by Kerala's most recognised brands, institutions, and enterprises.</p>
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        <div className="flex gap-6 animate-ticker w-max">
          {doubled.map((c, i) => (
            <div key={i} className="px-8 py-6 border border-border rounded bg-surface min-w-[200px] grid place-items-center font-cond text-lg font-bold tracking-wider hover:border-brand hover:text-brand transition-colors">
              {c}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
