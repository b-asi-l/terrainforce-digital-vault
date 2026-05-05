import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const services = [
  { n: "01", icon: "🛡️", title: "Armed & Unarmed Guards", desc: "Trained protection officers across Kerala, Tamil Nadu, Telangana & Karnataka — calibrated to deter every class of threat.", tone: "from-brand/30 to-cyan/10" },
  { n: "02", icon: "🏢", title: "Corporate Guarding", desc: "Self-managing professional teams safeguarding IT campuses, factories and HQs with zero compromise.", tone: "from-cyan/30 to-brand/10" },
  { n: "03", icon: "🎪", title: "Event Security", desc: "End-to-end planning for conferences, private functions and large-scale corporate gatherings.", tone: "from-brand/40 to-brand-deep/10" },
  { n: "04", icon: "🎓", title: "Security Training", desc: "Cutting-edge curriculum updated against emerging crime trends — building a future-ready force.", tone: "from-brand-deep/30 to-cyan/20" },
  { n: "05", icon: "🔍", title: "Antecedent Verification", desc: "Rigorous background screening and credential validation aligned with industry compliance.", tone: "from-cyan/40 to-brand/20" },
  { n: "06", icon: "📋", title: "Security Surveys", desc: "On-site vulnerability assessments and risk-mitigation strategies tailored to your terrain.", tone: "from-brand/30 to-brand-glow/10" },
];

export function HorizontalServices() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], ["2%", "-78%"]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [1, 0.6, 0.6, 1]);

  return (
    <section id="services" ref={ref} className="relative h-[400vh] bg-background">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
        <div aria-hidden="true" className="absolute -right-10 top-10 font-display text-[260px] text-brand/[0.03] tracking-[10px] leading-none whitespace-nowrap pointer-events-none select-none">FORCE</div>

        <motion.div style={{ opacity: titleOpacity }} className="px-[5%] mb-10 max-w-[1400px] mx-auto w-full">
          <div className="text-[10px] tracking-[4px] uppercase text-brand mb-3 flex items-center gap-3">Scroll to explore<span className="flex-1 max-w-10 h-px bg-brand" /></div>
          <h2 className="font-display text-[clamp(40px,6vw,84px)] tracking-wider leading-none">Security <span className="text-brand">Engineered</span></h2>
        </motion.div>

        <motion.div style={{ x }} className="flex gap-8 pl-[5%] will-change-transform">
          {services.map((s, i) => (
            <motion.article
              key={s.n}
              whileHover={{ y: -10, rotateY: 4, rotateX: -2 }}
              style={{ transformStyle: "preserve-3d" }}
              className={`relative shrink-0 w-[78vw] md:w-[440px] h-[440px] rounded-xl border border-brand/20 bg-gradient-to-br ${s.tone} backdrop-blur-sm p-10 overflow-hidden group transition-shadow hover:shadow-glow`}
            >
              <div className="absolute inset-0 bg-surface/70" />
              <div aria-hidden="true" className="absolute top-6 right-8 font-display text-[160px] leading-none text-brand/15">{s.n}</div>
              <div className="relative z-10 h-full flex flex-col">
                <div className="w-16 h-16 grid place-items-center text-3xl bg-brand/10 border border-brand/30 rounded-lg mb-6 shadow-glow" style={{ transform: "translateZ(40px)" }}>{s.icon}</div>
                <h3 className="font-cond text-2xl font-extrabold tracking-wider uppercase mb-4" style={{ transform: "translateZ(30px)" }}>{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed" style={{ transform: "translateZ(20px)" }}>{s.desc}</p>
                <div className="mt-auto flex items-center justify-between">
                  <span className="text-[10px] tracking-[3px] uppercase text-brand">0{i + 1} / 0{services.length}</span>
                  <span className="w-10 h-px bg-brand" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand via-cyan to-brand-glow scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
            </motion.article>
          ))}
          <div className="shrink-0 w-[20vw]" />
        </motion.div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 text-[10px] tracking-[3px] uppercase text-muted-foreground">
          <span className="w-8 h-px bg-brand" /> Scroll <span className="w-8 h-px bg-brand" />
        </div>
      </div>
    </section>
  );
}
