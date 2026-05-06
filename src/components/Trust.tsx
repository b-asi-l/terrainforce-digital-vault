import { useEffect, useRef, useState } from "react";
import indiaMap from "@/assets/terrain-india.png";
import team from "@/assets/team.jpg";

const metrics = [
  { lab: "National Coverage", val: "12 States", w: 28 },
  { lab: "Active Deployments", val: "800+ Sites", w: 52 },
  { lab: "Trained Workforce", val: "4200+ Staff", w: 78 },
  { lab: "Years of Experience", val: "20+ Years", w: 95 },
];

export function Trust() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) setVisible(true); });
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="trust" ref={ref} className="py-28 px-[5%] bg-background">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-[10px] tracking-[4px] uppercase text-brand mb-3 flex items-center gap-3">Why Choose Us<span className="flex-1 max-w-10 h-px bg-brand" /></div>
        <h2 className="font-display text-[clamp(38px,5vw,68px)] tracking-wider leading-none mb-14">Why You Can <span className="text-brand">Trust</span> Terrain Force?</h2>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            {metrics.map((m, i) => (
              <div key={i} className="mb-8">
                <div className="flex justify-between items-baseline mb-2">
                  <span className="text-xs tracking-[2px] uppercase text-muted-foreground">{m.lab}</span>
                  <span className="font-display text-2xl text-brand">{m.val}</span>
                </div>
                <div className="h-1 bg-brand/10 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-brand to-brand-glow rounded-full transition-all duration-[1800ms] ease-out shadow-[0_0_12px_var(--brand)]" style={{ width: visible ? `${m.w}%` : "0%" }} />
                </div>
              </div>
            ))}
            <p className="text-sm text-muted-foreground leading-relaxed mt-6">Our well-organised network provides security services mainly in South India. We are associated with renowned industrial and business establishments for protection, staffing, and payroll management.</p>
            <a href="#contact" className="inline-block mt-7 bg-gradient-brand text-primary-foreground px-9 py-4 text-xs font-extrabold tracking-[2.5px] uppercase rounded-sm hover:shadow-glow hover:-translate-y-1 transition-all">Explore Our Network</a>
          </div>

          <div className="relative text-center">
            <div className="absolute inset-0 bg-gradient-radial blur-3xl" />
            <div className="relative animate-float-slow">
              <img src={indiaMap} alt="Terrain Force pan-India branch network across 12 states" className="max-w-sm w-full mx-auto drop-shadow-[0_30px_80px_rgba(128,186,65,0.3)]" loading="lazy" />
            </div>
            <p className="text-[10px] tracking-[3px] uppercase text-muted-foreground mt-4">Pan-India Branch Network</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mt-24">
          <div>
            <div className="text-[10px] tracking-[4px] uppercase text-brand mb-3">Our Workforce</div>
            <h3 className="font-display text-4xl tracking-wider leading-none mb-4">The <span className="text-brand">Backbone</span> of Every Operation</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">If your TEAM is with you, the world is yours. Our highly trained security personnel are under continuous supervision and perform their duty with extreme zeal and sincerity — for all asset sizes.</p>
          </div>
          <div className="relative rounded-lg overflow-hidden corner-frame border border-brand/20 shadow-elegant">
            <span className="corner-tl" /><span className="corner-br" />
            <img src={team} alt="Terrain Force trained security team in formation" className="w-full h-auto" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
