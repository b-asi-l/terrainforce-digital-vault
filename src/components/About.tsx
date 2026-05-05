import { Tilt3D } from "./Tilt3D";
import expert from "@/assets/security-expert.png";

const acro = [
  ["T", "Teamwork"], ["E", "Empowerment"], ["R", "Reliable"], ["R", "Reworked"],
  ["A", "Attitude"], ["I", "Impactful"], ["N", "Nascent"],
];

const features = [
  { icon: "🛡️", title: "600+ Certified Protection Officers", desc: "All trained to deter every type of threat, operating under continuous supervision with extreme zeal and sincerity." },
  { icon: "📡", title: "TRAC – Smart Tracking Platform", desc: "Fully automated, real-time GPS tracking and guard management — close coordination with clients at all times." },
  { icon: "🏆", title: "CAPSI, MEPSC Accredited", desc: "Industry-recognised credentials that set us apart in professionalism, reliability, and service excellence." },
];

const philosophy = [
  { icon: "🎯", title: "Core Value", desc: "Our values constantly drive employees to work with complete determination — ensuring customer safety, regardless of contract size." },
  { icon: "🚀", title: "Mission", desc: "Deliver the most professional security service that consistently meets and exceeds client expectations through reliable, discreet solutions." },
  { icon: "🔭", title: "Vision", desc: "To lead the industry as a trusted provider of professional services with high standards, policies, and unwavering commitment." },
  { icon: "👥", title: "Our People", desc: "We focus on building a strong, honest management team with rigorous training that fosters a highly professional, loyal workforce." },
];

export function About() {
  return (
    <section id="about" className="relative py-28 px-[5%] overflow-hidden bg-card">
      <div className="absolute -top-48 -right-48 w-[600px] h-[600px] bg-gradient-radial pointer-events-none" />

      <div className="grid lg:grid-cols-2 gap-20 items-center max-w-[1400px] mx-auto">
        <div>
          <Tilt3D intensity={14} className="relative">
            <div className="relative bg-gradient-to-br from-surface to-surface-2 border border-brand/20 rounded-lg p-10 overflow-hidden">
              <div className="absolute inset-0 bg-[conic-gradient(from_180deg,transparent_60%,rgba(128,186,65,0.08)_70%,transparent_80%)] animate-spin-slow" />
              <img src={expert} alt="Terrain Force certified security expert" className="relative z-10 mx-auto max-w-[260px] w-full drop-shadow-[0_24px_48px_rgba(128,186,65,0.3)]" loading="lazy" />
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-brand rounded-full flex flex-col items-center justify-center font-display text-3xl text-primary-foreground shadow-glow">
                20+<span className="text-[10px] tracking-wider font-cond font-bold">YEARS</span>
              </div>
            </div>
          </Tilt3D>
          <div className="mt-8 grid gap-1.5">
            {acro.map(([l, w], i) => (
              <div key={i} className="flex items-center gap-3 px-3 py-2 border border-brand/15 rounded-sm bg-brand/5 hover:bg-brand/10 hover:border-brand/40 hover:translate-x-2 transition-all">
                <span className="font-display text-2xl text-brand w-6">{l}</span>
                <span className="text-xs tracking-[2px] uppercase">{w}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="text-[10px] tracking-[4px] uppercase text-brand mb-3 flex items-center gap-3">Who We Are<span className="flex-1 max-w-10 h-px bg-brand" /></div>
          <h2 className="font-display text-[clamp(38px,5vw,68px)] tracking-wider leading-none mb-5">Trusted Experts in<br /><span className="text-brand">Comprehensive Security</span></h2>
          <p className="text-muted-foreground leading-relaxed max-w-xl mb-8">Terrain Force is a privately-owned company with operations across South India. We offer a wide range of services with quality and prices second to none — fulfilling all your requirements at the highest service levels.</p>
          <ul className="grid gap-5">
            {features.map((f, i) => (
              <li key={i} className="flex gap-4 p-5 border border-border rounded bg-card/50 hover:border-brand/40 hover:translate-x-1.5 transition-all">
                <div className="w-12 h-12 bg-brand/10 border border-brand/25 rounded grid place-items-center text-xl shrink-0">{f.icon}</div>
                <div>
                  <h3 className="text-sm font-bold mb-1 font-cond uppercase tracking-wider">{f.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto mt-24">
        <div className="text-[10px] tracking-[4px] uppercase text-brand mb-3 flex items-center gap-3">Core Values<span className="flex-1 max-w-10 h-px bg-brand" /></div>
        <h2 className="font-display text-5xl md:text-6xl tracking-wider mb-10">Our <span className="text-brand">Philosophy</span></h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {philosophy.map((p, i) => (
            <Tilt3D key={i} intensity={6}>
              <div className="relative p-8 border border-border rounded bg-surface overflow-hidden group h-full">
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand to-cyan scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                <div className="text-3xl mb-4">{p.icon}</div>
                <h3 className="font-cond text-xl font-bold tracking-[2px] uppercase text-brand mb-3">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            </Tilt3D>
          ))}
        </div>
      </div>
    </section>
  );
}
