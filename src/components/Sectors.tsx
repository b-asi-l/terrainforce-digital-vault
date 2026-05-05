const sectors = [
  "Information Technology (IT)", "Banking & Financial Sector", "Shopping Malls & Multiplexes",
  "Export Zones", "Educational Institutions", "Hospitals", "Hotels & Resorts", "BPO",
  "Retail", "Factory & Industries", "Residential Complexes", "Government Facilities",
];

export function Sectors() {
  return (
    <section id="sectors" className="py-28 px-[5%] bg-card">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-[10px] tracking-[4px] uppercase text-brand mb-3 flex items-center gap-3">Industries Served<span className="flex-1 max-w-10 h-px bg-brand" /></div>
        <h2 className="font-display text-[clamp(38px,5vw,68px)] tracking-wider leading-none mb-5"><span className="text-brand">Serving</span> Sectors</h2>
        <p className="text-muted-foreground max-w-xl mb-12">Protecting your assets with unmatched professionalism, dedication, and outstanding service — across every sector.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {sectors.map((s, i) => (
            <div key={i} className="px-5 py-4 border border-border rounded flex items-center gap-3 text-sm font-semibold bg-surface hover:border-brand hover:text-brand hover:bg-brand/5 hover:-translate-y-1 transition-all cursor-default">
              <span className="w-1.5 h-1.5 bg-brand rounded-full shrink-0 shadow-[0_0_8px_var(--brand)]" />
              {s}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
