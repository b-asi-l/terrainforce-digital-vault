export function CTAStrip() {
  return (
    <div className="relative bg-gradient-brand py-16 px-[5%] text-center overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="relative max-w-3xl mx-auto">
        <h2 className="font-display text-5xl md:text-7xl tracking-wider text-primary-foreground mb-5">Talk To Us!</h2>
        <p className="text-primary-foreground/70 max-w-md mx-auto mb-8">Your safety is our top priority. We deliver a security framework that is both effective and cost-efficient.</p>
        <a href="#contact" className="inline-block bg-background text-brand px-10 py-4 text-xs font-extrabold tracking-[2.5px] uppercase rounded-sm hover:bg-card hover:-translate-y-1 hover:shadow-elegant transition-all">Connect Now</a>
      </div>
    </div>
  );
}
