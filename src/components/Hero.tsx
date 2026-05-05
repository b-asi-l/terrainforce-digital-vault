import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ParticleField } from "./ParticleField";
import heroGuard from "@/assets/hero-guard.jpg";
import shield3d from "@/assets/shield-3d.png";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const smooth = useSpring(scrollYProgress, { stiffness: 80, damping: 25, restDelta: 0.001 });

  // Scroll-driven transforms (all hooks called unconditionally — safe)
  const bgY = useTransform(smooth, [0, 1], ["0%", "30%"]);
  const bgScale = useTransform(smooth, [0, 1], [1.05, 1.2]);
  const overlayOpacity = useTransform(smooth, [0, 1], [0.4, 0.9]);

  const titleY = useTransform(smooth, [0, 1], ["0%", "-40%"]);
  const titleOpacity = useTransform(smooth, [0, 0.6, 1], [1, 0.4, 0]);
  const titleScale = useTransform(smooth, [0, 1], [1, 0.85]);

  const subY = useTransform(smooth, [0, 1], ["0%", "-80%"]);
  const subOpacity = useTransform(smooth, [0, 0.5], [1, 0]);

  const shieldY = useTransform(smooth, [0, 1], ["0%", "-60%"]);
  const shieldRotate = useTransform(smooth, [0, 1], [0, 180]);
  const shieldScale = useTransform(smooth, [0, 0.5, 1], [1, 1.3, 0.6]);
  const shieldOpacity = useTransform(smooth, [0, 0.8], [1, 0]);

  const statsY = useTransform(smooth, [0, 1], ["0%", "120%"]);
  const statsOpacity = useTransform(smooth, [0, 0.4], [1, 0]);

  const scrollHintOpacity = useTransform(smooth, [0, 0.15], [1, 0]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen overflow-hidden flex items-center"
      style={{ perspective: 1200 }}
    >
      {/* Background image with scroll parallax */}
      <motion.div
        style={{ y: bgY, scale: bgScale }}
        className="absolute inset-0 will-change-transform"
      >
        <img
          src={heroGuard}
          alt="Terrain Force security officer guarding a corporate facility in Kochi"
          className="w-full h-full object-cover"
        />
      </motion.div>
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-gradient-hero pointer-events-none"
      />
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

      {/* Particle network */}
      <ParticleField />

      {/* Scanline */}
      <div className="absolute inset-x-0 h-32 bg-gradient-to-b from-brand/10 to-transparent animate-scan pointer-events-none" />

      {/* Floating 3D shield with scroll-linked rotation */}
      <motion.div
        style={{ y: shieldY, rotate: shieldRotate, scale: shieldScale, opacity: shieldOpacity }}
        className="absolute right-[5%] top-1/2 -translate-y-1/2 hidden xl:block w-[420px] h-[420px] pointer-events-none will-change-transform"
      >
        <div className="absolute inset-0 bg-gradient-radial blur-2xl animate-pulse-glow" />
        <img
          src={shield3d}
          alt=""
          aria-hidden="true"
          className="relative w-full h-full object-contain animate-float-slow drop-shadow-[0_0_60px_rgba(128,186,65,0.6)]"
        />
        <div className="absolute inset-8 border border-brand/30 rounded-full animate-spin-slow" />
        <div
          className="absolute inset-16 border border-cyan/20 rounded-full animate-spin-slow"
          style={{ animationDirection: "reverse" }}
        />
      </motion.div>

      <div className="relative z-10 px-[5%] pt-36 pb-20 max-w-[1400px] w-full">
        <motion.div
          style={{ y: titleY, opacity: titleOpacity, scale: titleScale }}
          className="will-change-transform"
        >
          <div className="flex items-center gap-3 mb-7 animate-reveal">
            <span className="w-10 h-px bg-brand" />
            <span className="text-[11px] tracking-[4px] uppercase text-brand font-semibold">
              Premier Security Since 2004
            </span>
          </div>
          <h1
            className="font-display text-[clamp(64px,11vw,160px)] leading-[0.88] tracking-[3px] mb-7 animate-reveal"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="block text-stroke">We Protect</span>
            <span className="block text-brand drop-shadow-[0_0_60px_rgba(128,186,65,0.5)]">
              Your Terrain
            </span>
          </h1>
        </motion.div>

        <motion.p
          style={{ y: subY, opacity: subOpacity }}
          className="text-base text-muted-foreground leading-relaxed max-w-xl mb-12 border-l-2 border-brand pl-5 will-change-transform"
        >
          Kerala's most trusted security company. 4200+ certified protection officers safeguarding
          corporates, hospitals, IT campuses & retail across 12 Indian states.
        </motion.p>

        <motion.div
          style={{ opacity: subOpacity }}
          className="flex flex-wrap gap-4 mb-16"
        >
          <a
            href="#contact"
            className="relative overflow-hidden bg-gradient-brand text-primary-foreground px-9 py-4 text-xs font-extrabold tracking-[2.5px] uppercase rounded-sm hover:shadow-glow hover:-translate-y-1 transition-all group"
          >
            <span className="relative z-10">Request a Quote</span>
            <span className="absolute inset-0 bg-white/20 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
          </a>
          <a
            href="#services"
            className="border border-brand/40 text-brand px-9 py-4 text-xs font-bold tracking-[2.5px] uppercase rounded-sm hover:bg-brand/10 hover:-translate-y-1 transition-all backdrop-blur-sm"
          >
            Our Services
          </a>
        </motion.div>

        <motion.div
          style={{ y: statsY, opacity: statsOpacity }}
          className="grid grid-cols-2 md:grid-cols-4 max-w-2xl glass rounded-md overflow-hidden will-change-transform"
        >
          {[
            { n: "4200+", l: "Trained Staff" },
            { n: "12", l: "States" },
            { n: "800+", l: "Active Sites" },
            { n: "20+", l: "Years" },
          ].map((m, i) => (
            <div key={i} className="p-5 text-center border-r last:border-r-0 border-border">
              <span className="font-display text-4xl text-brand block leading-none">{m.n}</span>
              <span className="text-[10px] tracking-[2px] uppercase text-muted-foreground mt-1 block">
                {m.l}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        style={{ opacity: scrollHintOpacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[3px] uppercase text-brand">Scroll</span>
        <div className="w-1.5 h-1.5 bg-brand rounded-full animate-pulse" />
        <div className="w-px h-12 bg-gradient-to-b from-brand to-transparent" />
      </motion.div>
    </section>
  );
}
