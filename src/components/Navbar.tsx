import { useEffect, useState } from "react";
import logo from "@/assets/terrain-logo.png";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#sectors", label: "Sectors" },
  { href: "#team", label: "Team" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="hidden md:flex justify-end gap-8 px-[5%] py-2 text-xs text-muted-foreground border-b border-border bg-background/80 relative z-50">
        <a href="tel:04844304400" className="text-brand hover:text-brand-glow transition-colors">📞 0484 4304400</a>
        <a href="mailto:info@terrainforce.com" className="text-brand hover:text-brand-glow transition-colors">✉ info@terrainforce.com</a>
        <span>📍 Kochi, Kerala</span>
      </div>
      <nav className={`fixed left-0 right-0 z-40 px-[5%] h-[72px] flex items-center justify-between transition-all duration-500 ${scrolled ? "top-0 bg-background/95 backdrop-blur-xl border-b border-border" : "top-9"}`}>
        <a href="#home" className="flex items-center gap-2">
          <img src={logo} alt="Terrain Force" className="h-11 w-auto brightness-110" />
        </a>
        <ul className="hidden lg:flex gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="block px-4 py-2 text-xs font-bold tracking-[2.5px] uppercase text-muted-foreground hover:text-brand transition-colors relative group">
                {l.label}
                <span className="absolute bottom-0 left-1/2 right-1/2 h-0.5 bg-brand group-hover:left-4 group-hover:right-4 transition-all" />
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="hidden md:inline-flex bg-gradient-brand text-primary-foreground px-6 py-2.5 text-[11px] font-extrabold tracking-[2.5px] uppercase rounded-sm hover:shadow-glow transition-all">Get Quote</a>
        <button onClick={() => setOpen(!open)} className="lg:hidden flex flex-col gap-1.5 p-1" aria-label="Toggle menu">
          <span className={`w-6 h-0.5 bg-brand transition-all ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`w-6 h-0.5 bg-brand transition-all ${open ? "opacity-0" : ""}`} />
          <span className={`w-6 h-0.5 bg-brand transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>
      {open && (
        <div className="fixed inset-0 z-30 bg-background/98 backdrop-blur-xl flex flex-col items-center justify-center gap-6 lg:hidden">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="font-display text-4xl tracking-widest text-foreground hover:text-brand transition-colors">{l.label}</a>
          ))}
        </div>
      )}
    </>
  );
}
