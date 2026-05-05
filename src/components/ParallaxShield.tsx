import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import shield from "@/assets/shield-3d.png";

const pillars = [
  { k: "01", t: "Detect", d: "24/7 surveillance powered by TRAC — our smart guard tracking platform." },
  { k: "02", t: "Deter", d: "Visible, certified officers trained to neutralise threats before they escalate." },
  { k: "03", t: "Defend", d: "Rapid response protocols engineered for corporates, hospitals & retail." },
  { k: "04", t: "Document", d: "Full audit trails, incident reports and compliance-ready records." },
];

export function ParallaxShield() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["10%", "-30%"]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-30, 30]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.1, 0.9]);
  const textY = useTransform(scrollYProgress, [0, 1], ["30%", "-30%"]);

  return (
    <section ref={ref} className="relative min-h-[110vh] py-32 px-[5%] overflow-hidden bg-card">
      <motion.div style={{ y: y1 }} aria-hidden="true" className="absolute -left-32 top-20 w-[500px] h-[500px] rounded-full bg-gradient-radial blur-3xl" />
      <motion.div style={{ y: y2 }} aria-hidden="true" className="absolute right-0 bottom-0 w-[400px] h-[400px] rounded-full bg-cyan/10 blur-3xl" />

      <div className="relative grid lg:grid-cols-2 gap-16 items-center max-w-[1400px] mx-auto">
        <motion.div style={{ y: textY }}>
          <div className="text-[10px] tracking-[4px] uppercase text-brand mb-3 flex items-center gap-3">Four Pillars<span className="flex-1 max-w-10 h-px bg-brand" /></div>
          <h2 className="font-display text-[clamp(40px,6vw,80px)] tracking-wider leading-none mb-10">The <span className="text-brand">Terrain</span><br />Doctrine</h2>
          <ul className="grid sm:grid-cols-2 gap-5">
            {pillars.map((p) => (
              <motion.li
                key={p.k}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative p-6 border border-brand/20 rounded-md bg-surface/60 backdrop-blur hover:border-brand/60 transition-colors"
              >
                <span className="font-display text-3xl text-brand/40 block">{p.k}</span>
                <h3 className="font-cond text-lg font-extrabold tracking-wider uppercase mt-1 mb-2">{p.t}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{p.d}</p>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <div className="relative h-[520px] hidden lg:block">
          <motion.div style={{ rotate, scale }} className="absolute inset-0 grid place-items-center">
            <div className="absolute inset-12 border border-brand/20 rounded-full" />
            <div className="absolute inset-24 border border-cyan/20 rounded-full" />
            <div className="absolute inset-36 border border-brand/15 rounded-full" />
            <img src={shield} alt="" aria-hidden="true" className="relative w-[360px] h-[360px] object-contain drop-shadow-[0_0_80px_rgba(128,186,65,0.6)]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
