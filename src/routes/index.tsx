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
  head: () => ({
    meta: [
      { title: "LIGA Consultoria Licitatória | Especialistas em Licitações Públicas" },
      {
        name: "description",
        content:
          "Consultoria especializada em licitações públicas, pregões eletrônicos, contratos administrativos e estratégia empresarial para atuação no mercado público.",
      },
      { property: "og:title", content: "LIGA Consultoria Licitatória | Especialistas em Licitações Públicas" },
      {
        property: "og:description",
        content:
          "Consultoria especializada em licitações públicas, pregões eletrônicos e contratos administrativos. Mais de 30 anos de experiência.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@300;400;500;600;700&display=swap",
      },
    ],
  }),
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
