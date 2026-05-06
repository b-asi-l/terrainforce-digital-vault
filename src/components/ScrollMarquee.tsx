import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const words = ["PROTECT", "DETECT", "DEFEND", "SECURE", "PROTECT", "DETECT", "DEFEND", "SECURE"];

export function ScrollMarquee() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x1 = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["-40%", "0%"]);

  return (
    <section ref={ref} aria-hidden="true" className="relative py-20 bg-background overflow-hidden border-y border-border">
      <motion.div style={{ x: x1 }} className="flex gap-12 whitespace-nowrap font-display text-[clamp(60px,12vw,180px)] leading-none tracking-wider">
        {words.map((w, i) => (
          <span key={i} className={i % 2 === 0 ? "text-brand" : "text-stroke"}>{w} •</span>
        ))}
      </motion.div>
      <motion.div style={{ x: x2 }} className="flex gap-12 whitespace-nowrap font-display text-[clamp(40px,8vw,120px)] leading-none tracking-wider opacity-50 mt-4">
        {words.slice().reverse().map((w, i) => (
          <span key={i} className={i % 2 === 0 ? "text-stroke" : "text-brand"}>{w} •</span>
        ))}
      </motion.div>
    </section>
  );
}
