import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const cards = [
  { n: "4200+", l: "Trained Officers", d: "Certified protection professionals across India." , bg: "from-brand to-brand-deep" },
  { n: "12", l: "Indian States", d: "Operational footprint with deep regional intelligence.", bg: "from-cyan to-brand" },
  { n: "800+", l: "Active Sites", d: "Corporate, hospital, retail & IT campuses we safeguard.", bg: "from-brand-glow to-brand" },
  { n: "20+", l: "Years of Trust", d: "Two decades of uncompromised security delivery.", bg: "from-brand to-cyan" },
];

function Card({ i, total, item }: { i: number; total: number; item: typeof cards[0] }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "start start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const top = `calc(15vh + ${i * 40}px)`;

  return (
    <div ref={ref} className="h-screen sticky" style={{ top }}>
      <motion.div
        style={{ scale }}
        className={`relative mx-auto max-w-4xl h-[60vh] rounded-2xl bg-gradient-to-br ${item.bg} p-12 shadow-elegant overflow-hidden`}
      >
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute top-6 right-8 text-[10px] tracking-[3px] uppercase text-primary-foreground/70">0{i + 1} / 0{total}</div>
        <div className="relative h-full flex flex-col justify-end">
          <span className="font-display text-[clamp(80px,16vw,220px)] leading-[0.85] text-primary-foreground tracking-wider drop-shadow-2xl">{item.n}</span>
          <span className="font-cond text-2xl uppercase tracking-[4px] text-primary-foreground mt-2">{item.l}</span>
          <p className="text-primary-foreground/80 max-w-md mt-3 text-sm">{item.d}</p>
        </div>
      </motion.div>
    </div>
  );
}

export function StackingStats() {
  return (
    <section className="relative bg-background py-20">
      <div className="px-[5%] max-w-[1400px] mx-auto mb-12">
        <div className="text-[10px] tracking-[4px] uppercase text-brand mb-3 flex items-center gap-3">By the numbers<span className="flex-1 max-w-10 h-px bg-brand" /></div>
        <h2 className="font-display text-[clamp(40px,6vw,80px)] tracking-wider leading-none">Scale that <span className="text-brand">Protects</span></h2>
      </div>
      <div className="relative">
        {cards.map((c, i) => <Card key={i} i={i} total={cards.length} item={c} />)}
      </div>
    </section>
  );
}
