import { Tilt3D } from "./Tilt3D";

const services = [
  { n: "01", icon: "🔫", title: "Armed & Unarmed Guards", desc: "Security guard services throughout Kerala, Tamil Nadu, Telangana with strategic support in Karnataka. Officers trained to deter all types of threats." },
  { n: "02", icon: "🏢", title: "Corporate Industry Guarding", desc: "Specialised corporate security with personnel equal to other companies' supervisors — self-managing, professional, reliable." },
  { n: "03", icon: "🎪", title: "Event Security", desc: "Private parties, conferences, family & corporate functions — our dedicated event team will plan and secure every occasion." },
  { n: "04", icon: "🎓", title: "Security Training", desc: "Cutting-edge methods, tools and practice guidelines. Experts updated with new crime trends to create a skilled security force." },
  { n: "05", icon: "🔍", title: "Antecedents Verification", desc: "Rigorous background screening and credential verification — thorough pre-employment procedures aligned with industry standards." },
  { n: "06", icon: "📋", title: "Security Surveys", desc: "On-site vulnerability assessments and security gap analysis. Risk-mitigation strategies for your operational environment." },
];

export function Services() {
  return (
    <section id="services" className="relative py-28 px-[5%] overflow-hidden bg-background">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div aria-hidden="true" className="absolute right-[-2%] top-1/2 -translate-y-1/2 font-display text-[200px] text-brand/[0.025] tracking-[8px] whitespace-nowrap pointer-events-none select-none">SECURITY</div>

      <div className="relative max-w-[1400px] mx-auto">
        <div className="text-[10px] tracking-[4px] uppercase text-brand mb-3 flex items-center gap-3">What We Offer<span className="flex-1 max-w-10 h-px bg-brand" /></div>
        <h2 className="font-display text-[clamp(38px,5vw,68px)] tracking-wider leading-none mb-5">Our <span className="text-brand">Security Services</span></h2>
        <p className="text-muted-foreground max-w-xl mb-14">Our success is our commitment to service, innovative ideas, and dedication towards comprehensive, tailored security solutions for every client.</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {services.map((s) => (
            <Tilt3D key={s.n} intensity={6}>
              <article className="relative bg-background p-10 group hover:bg-surface transition-colors h-full overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-brand to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-b from-brand/[0.06] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="font-display text-7xl text-brand/10 absolute top-4 right-6 leading-none">{s.n}</div>
                <div className="text-3xl mb-5 relative">{s.icon}</div>
                <h3 className="font-cond text-xl font-extrabold tracking-wider uppercase mb-3 relative">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed relative">{s.desc}</p>
              </article>
            </Tilt3D>
          ))}
        </div>
      </div>
    </section>
  );
}
