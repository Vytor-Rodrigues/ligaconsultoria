import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Header } from "@/components/liga/Header";
import { Hero } from "@/components/liga/Hero";
import { Stats } from "@/components/liga/Stats";
import { About } from "@/components/liga/About";
import { WhyPublic, HowWeHelp } from "@/components/liga/Reasons";
import { Services } from "@/components/liga/Services";
import { Differentials, Ways } from "@/components/liga/Differentials";
import { Team, Testimonials } from "@/components/liga/Team";
import { CTA, Contact, Footer, FloatingWhatsApp } from "@/components/liga/Contact";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground antialiased">
      <Header />
      <Hero />
      <Stats />
      <About />
      <WhyPublic />
      <HowWeHelp />
      <Services />
      <Differentials />
      <Ways />
      <Team />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
      <Toaster richColors position="top-right" />
    </main>
  );
}
