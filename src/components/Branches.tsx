import { Tilt3D } from "./Tilt3D";

const branches = [
  { state: "Kerala", addr: "Regional Office: 46/2914B, Madathiparambu Rd, Vennala P.O, Kochi, Kerala – 682028" },
  { state: "Tamil Nadu", addr: "Branch Office: Level-7, Ispahani Centre, 123/124 Nungambakkam High Rd, Chennai – 600034" },
  { state: "Telangana", addr: "Branch Office: Louel Apartment-24, Sreemoolanagaram, Begumpet, Telangana" },
  { state: "Karnataka", addr: "Darson Secure Solutions Pvt Ltd (Strategic Partner), 540/8 2nd B Cross, Annaiah Reddy Layout, Banaswadi, Bangalore – 560043" },
];

export function Branches() {
  return (
    <section className="py-28 px-[5%] bg-background">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-[10px] tracking-[4px] uppercase text-brand mb-3 flex items-center gap-3">Our Footprint<span className="flex-1 max-w-10 h-px bg-brand" /></div>
        <h2 className="font-display text-[clamp(38px,5vw,68px)] tracking-wider leading-none mb-12">Branch <span className="text-brand">Offices</span></h2>
        <div className="grid md:grid-cols-2 gap-6">
          {branches.map((b, i) => (
            <Tilt3D key={i} intensity={6}>
              <div className="relative p-8 border border-border rounded bg-surface corner-frame hover:border-brand/40 transition-all h-full">
                <span className="corner-tl" /><span className="corner-br" />
                <div className="font-display text-3xl text-brand tracking-wider mb-3">{b.state}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.addr}</p>
              </div>
            </Tilt3D>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="text-[10px] tracking-[4px] uppercase text-brand mb-3">Certified & Accredited</div>
          <h3 className="font-display text-4xl md:text-5xl tracking-wider mb-8">Our <span className="text-brand">Accreditations</span></h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["Ministry of Home Affairs", "CAPSI Member", "Skill India Partner", "MEPSC Certified"].map((a, i) => (
              <div key={i} className="px-6 py-4 border border-brand/30 rounded bg-surface text-sm font-cond font-bold tracking-wider uppercase hover:bg-brand/10 hover:shadow-glow transition-all">
                {a}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
