import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import trac from "@/assets/partners/trac.png";
import darson from "@/assets/partners/darson.png";
import f10 from "@/assets/partners/f10.png";

export function Partners() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-6, 6]);

  return (
    <section ref={ref} className="relative py-24 px-[5%] bg-background overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-radial blur-3xl pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto">
        {/* TRAC */}
        <motion.div
          style={{ y }}
          className="glass rounded-2xl p-10 md:p-14 mb-16 flex flex-col md:flex-row items-center justify-between gap-8 shadow-elegant"
        >
          <div className="max-w-md text-center md:text-left">
            <div className="text-[10px] tracking-[4px] uppercase text-brand mb-3">Technology</div>
            <h3 className="font-display text-3xl md:text-5xl tracking-wider leading-none mb-3">
              Our Fully Automated <span className="text-brand">Tracking System</span>
            </h3>
            <p className="text-sm text-muted-foreground">Real-time guard tracking, geo-fenced patrols and digital incident reporting — built into every deployment.</p>
          </div>
          <motion.div style={{ rotate }} className="relative">
            <div className="absolute inset-0 bg-gradient-brand blur-2xl opacity-40" />
            <img src={trac} alt="TRAC — Terrain Force automated tracking system logo" className="relative h-20 md:h-24 w-auto drop-shadow-[0_10px_30px_rgba(128,186,65,0.5)]" loading="lazy" />
          </motion.div>
        </motion.div>

        {/* Partners */}
        <div className="text-center">
          <div className="text-[10px] tracking-[4px] uppercase text-brand mb-3">Alliances</div>
          <h2 className="font-display text-[clamp(32px,4vw,56px)] tracking-wider leading-none mb-12">
            Strategically <span className="text-brand">Partnered</span> With
          </h2>

          <div className="grid grid-cols-2 gap-8 max-w-3xl mx-auto">
            {[
              { src: darson, alt: "Darson — strategic partner of Terrain Force" },
              { src: f10, alt: "F10 — strategic partner of Terrain Force" },
            ].map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40, rotateY: -20 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                whileHover={{ scale: 1.05, rotateY: 8 }}
                style={{ transformStyle: "preserve-3d" }}
                className="glass rounded-xl p-10 grid place-items-center min-h-[180px] hover:border-brand/40 hover:shadow-glow transition-all"
              >
                <img src={p.src} alt={p.alt} className="max-h-20 w-auto" loading="lazy" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
