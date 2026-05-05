import { ParticleField } from "./ParticleField";
import heroGuard from "@/assets/hero-guard.jpg";
import shield3d from "@/assets/shield-3d.png";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden flex items-center">
      {/* Background image with parallax */}
      <div className="absolute inset-0">
        <img src={heroGuard} alt="Terrain Force security officer guarding a corporate facility in Kochi" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 grid-bg opacity-40" />
      </div>

      {/* Particle network */}
      <ParticleField />

      {/* Scanline effect */}
      <div className="absolute inset-x-0 h-32 bg-gradient-to-b from-brand/10 to-transparent animate-scan pointer-events-none" />

      {/* Floating 3D shield */}
      <div className="absolute right-[5%] top-1/2 -translate-y-1/2 hidden xl:block w-[420px] h-[420px] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-radial blur-2xl animate-pulse-glow" />
        <img src={shield3d} alt="" aria-hidden="true" className="relative w-full h-full object-contain animate-float-slow drop-shadow-[0_0_60px_rgba(128,186,65,0.6)]" />
        <div className="absolute inset-8 border border-brand/30 rounded-full animate-spin-slow" />
        <div className="absolute inset-16 border border-cyan/20 rounded-full animate-spin-slow" style={{ animationDirection: "reverse" }} />
      </div>

      <div className="relative z-10 px-[5%] pt-36 pb-20 max-w-[1400px] w-full">
        <div className="flex items-center gap-3 mb-7 animate-reveal">
          <span className="w-10 h-px bg-brand" />
          <span className="text-[11px] tracking-[4px] uppercase text-brand font-semibold">Premier Security Since 2004</span>
        </div>
        <h1 className="font-display text-[clamp(64px,11vw,160px)] leading-[0.88] tracking-[3px] mb-7 animate-reveal" style={{ animationDelay: "0.1s" }}>
          <span className="block text-stroke">We Protect</span>
          <span className="block text-brand drop-shadow-[0_0_60px_rgba(128,186,65,0.5)]">Your Terrain</span>
        </h1>
        <p className="text-base text-muted-foreground leading-relaxed max-w-xl mb-12 border-l-2 border-brand pl-5 animate-reveal" style={{ animationDelay: "0.2s" }}>
          Kerala's most trusted security company. 4200+ certified protection officers safeguarding corporates, hospitals, IT campuses & retail across 12 Indian states.
        </p>
        <div className="flex flex-wrap gap-4 mb-16 animate-reveal" style={{ animationDelay: "0.3s" }}>
          <a href="#contact" className="relative overflow-hidden bg-gradient-brand text-primary-foreground px-9 py-4 text-xs font-extrabold tracking-[2.5px] uppercase rounded-sm hover:shadow-glow hover:-translate-y-1 transition-all group">
            <span className="relative z-10">Request a Quote</span>
            <span className="absolute inset-0 bg-white/20 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
          </a>
          <a href="#services" className="border border-brand/40 text-brand px-9 py-4 text-xs font-bold tracking-[2.5px] uppercase rounded-sm hover:bg-brand/10 hover:-translate-y-1 transition-all backdrop-blur-sm">Our Services</a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 max-w-2xl glass rounded-md overflow-hidden animate-reveal" style={{ animationDelay: "0.4s" }}>
          {[
            { n: "4200+", l: "Trained Staff" },
            { n: "12", l: "States" },
            { n: "800+", l: "Active Sites" },
            { n: "20+", l: "Years" },
          ].map((m, i) => (
            <div key={i} className="p-5 text-center border-r last:border-r-0 border-border">
              <span className="font-display text-4xl text-brand block leading-none">{m.n}</span>
              <span className="text-[10px] tracking-[2px] uppercase text-muted-foreground mt-1 block">{m.l}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <div className="w-1.5 h-1.5 bg-brand rounded-full animate-pulse" />
        <div className="w-px h-12 bg-gradient-to-b from-brand to-transparent" />
      </div>
    </section>
  );
}
