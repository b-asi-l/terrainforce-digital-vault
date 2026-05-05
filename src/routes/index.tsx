import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Sectors } from "@/components/Sectors";
import { CTAStrip } from "@/components/CTAStrip";
import { Trust } from "@/components/Trust";
import { Team } from "@/components/Team";
import { Clients } from "@/components/Clients";
import { Branches } from "@/components/Branches";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Sectors />
      <CTAStrip />
      <Trust />
      <Team />
      <Clients />
      <Branches />
      <Contact />
      <Footer />
      <a href="https://wa.me/914844304400" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="fixed bottom-6 right-6 z-40 w-14 h-14 grid place-items-center bg-gradient-brand rounded-full shadow-glow hover:scale-110 transition-transform animate-glow-pulse">
        <span className="text-2xl">💬</span>
      </a>
    </main>
  );
}
