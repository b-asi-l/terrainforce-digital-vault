import { useState } from "react";

export function Contact() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="py-28 px-[5%] bg-card">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-[10px] tracking-[4px] uppercase text-brand mb-3 flex items-center gap-3">Get In Touch<span className="flex-1 max-w-10 h-px bg-brand" /></div>
        <h2 className="font-display text-[clamp(38px,5vw,68px)] tracking-wider leading-none mb-12">Let's Secure <span className="text-brand">Your Terrain</span></h2>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-5">
            {[
              { icon: "🏢", lab: "Head Office", val: <><strong className="text-foreground">Terrain Protection Services Pvt Ltd</strong><br />(Formerly Terrain Force Pvt Ltd)<br />1st Floor, 46/2914 B, Madathiparambu Road,<br />Vennala P.O, Kochi – 682028, Kerala</> },
              { icon: "📞", lab: "Phone", val: <><a href="tel:04844304400" className="text-brand hover:text-brand-glow">0484 4304400</a> &nbsp;|&nbsp; <a href="tel:04428333401" className="text-brand hover:text-brand-glow">044 2833 3401</a></> },
              { icon: "✉️", lab: "Email", val: <a href="mailto:info@terrainforce.com" className="text-brand hover:text-brand-glow">info@terrainforce.com</a> },
            ].map((c, i) => (
              <article key={i} className="flex gap-4 p-5 border border-border rounded bg-surface">
                <div className="w-12 h-12 bg-brand/10 border border-brand/25 rounded grid place-items-center text-xl shrink-0">{c.icon}</div>
                <div>
                  <div className="text-[10px] tracking-[2px] uppercase text-brand mb-1">{c.lab}</div>
                  <div className="text-sm text-muted-foreground leading-relaxed">{c.val}</div>
                </div>
              </article>
            ))}
            <div className="flex gap-3">
              <a href="https://www.facebook.com/Terrainforce" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-11 h-11 grid place-items-center border border-brand/30 rounded text-brand hover:bg-brand hover:text-primary-foreground transition-all font-bold">f</a>
              <a href="https://www.linkedin.com/company/terrain-force-private-limited" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-11 h-11 grid place-items-center border border-brand/30 rounded text-brand hover:bg-brand hover:text-primary-foreground transition-all font-bold text-sm">in</a>
            </div>
            <div className="rounded overflow-hidden border border-border h-72">
              <iframe src="https://maps.google.com/maps?q=Terrain+Protection+Services+Vennala+Kochi&output=embed" title="Terrain Protection Services location" loading="lazy" className="w-full h-full grayscale-[0.7] contrast-125" />
            </div>
          </div>

          <form onSubmit={onSubmit} className="p-8 md:p-10 border border-brand/20 rounded-lg bg-gradient-to-br from-surface to-surface-2 shadow-card">
            <h3 className="font-cond text-2xl font-bold tracking-wider uppercase mb-6">Drop Us a <span className="text-brand">Message</span></h3>
            {[
              { id: "fname", label: "Your Name", type: "text", placeholder: "John Doe" },
              { id: "femail", label: "Your Email", type: "email", placeholder: "you@company.com" },
              { id: "fphone", label: "Phone Number", type: "tel", placeholder: "+91 98765 43210" },
            ].map((f) => (
              <div key={f.id} className="mb-5">
                <label htmlFor={f.id} className="text-[10px] tracking-[2px] uppercase text-muted-foreground block mb-2">{f.label}</label>
                <input id={f.id} type={f.type} required placeholder={f.placeholder} className="w-full px-4 py-3 bg-background border border-border rounded text-sm focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand transition-all" />
              </div>
            ))}
            <div className="mb-5">
              <label htmlFor="fsubject" className="text-[10px] tracking-[2px] uppercase text-muted-foreground block mb-2">Service Required</label>
              <select id="fsubject" required className="w-full px-4 py-3 bg-background border border-border rounded text-sm focus:border-brand focus:outline-none transition-all">
                <option value="">Select a service</option>
                <option>Armed Protection</option>
                <option>Unarmed Protection</option>
                <option>Corporate Industry Guarding</option>
                <option>Event Security</option>
                <option>Security Training</option>
                <option>Antecedents Verification</option>
                <option>Security Survey</option>
                <option>Other Enquiry</option>
              </select>
            </div>
            <div className="mb-6">
              <label htmlFor="fmsg" className="text-[10px] tracking-[2px] uppercase text-muted-foreground block mb-2">Your Message</label>
              <textarea id="fmsg" rows={4} required placeholder="Describe your security requirement…" className="w-full px-4 py-3 bg-background border border-border rounded text-sm focus:border-brand focus:outline-none resize-none transition-all" />
            </div>
            <button type="submit" disabled={sent} className="w-full bg-gradient-brand text-primary-foreground py-4 text-xs font-extrabold tracking-[2.5px] uppercase rounded-sm hover:shadow-glow hover:-translate-y-0.5 transition-all disabled:opacity-70">
              {sent ? "Message Sent ✓" : "Submit Request"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
