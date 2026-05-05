import logo from "@/assets/terrain-logo.png";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border pt-16 pb-6 px-[5%]" role="contentinfo">
      <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
        <div>
          <img src={logo} alt="Terrain Protection Services" className="h-11 mb-5" />
          <p className="text-sm text-muted-foreground leading-relaxed mb-5">A security company controlled and managed by specialists with 15+ years of experience. Committed to customer safety, regardless of contract size.</p>
          <a href="#contact" className="inline-block text-xs font-bold tracking-[2px] uppercase text-brand border border-brand/30 px-5 py-2.5 rounded-sm hover:bg-brand/10 transition-all">Download Brochure</a>
        </div>
        <div>
          <h4 className="font-cond text-sm font-bold tracking-[2px] uppercase text-brand mb-4">Navigation</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {[["Home","#home"],["About Us","#about"],["Services","#services"],["Sectors","#sectors"],["Team","#team"],["Contact","#contact"]].map(([l,h]) => (
              <li key={h}><a href={h} className="hover:text-brand transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-cond text-sm font-bold tracking-[2px] uppercase text-brand mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {["Armed Protection","Unarmed Protection","Corporate Guarding","Event Security","Security Training","Antecedents Verification","Security Surveys"].map((s) => (
              <li key={s}><a href="#services" className="hover:text-brand transition-colors">{s}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-cond text-sm font-bold tracking-[2px] uppercase text-brand mb-4">Contact</h4>
          <address className="not-italic text-sm text-muted-foreground leading-relaxed">
            <p className="text-foreground font-semibold mb-1">Terrain Protection Services Pvt Ltd</p>
            <p className="mb-3 text-xs">1st Floor, 46/2914 B, Madathiparambu Road, Vennala P.O, Kochi – 682028</p>
            <a href="tel:04844304400" className="text-brand hover:text-brand-glow block">0484 4304400</a>
            <a href="mailto:info@terrainforce.com" className="text-brand hover:text-brand-glow block">info@terrainforce.com</a>
          </address>
        </div>
      </div>
      <div className="max-w-[1400px] mx-auto border-t border-border pt-6 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} Terrain Protection Services Pvt Ltd. All Rights Reserved.</p>
        <p>Formerly known as Terrain Force Pvt Ltd</p>
      </div>
    </footer>
  );
}
