import { FadeUp, SectionHeader } from "./Section";
import { Quote } from "lucide-react";

const team = [
  {
    name: "Divalessa Bratz Cordeiro",
    role: "Consultora Comercial e Administrativa",
    bio: "Especialista em relacionamento com clientes, processos licitatórios e estratégias empresariais.",
    initials: "DB",
  },
  {
    name: "Lisiane Teixeira",
    role: "Advogada Empresarial • Especialista em Licitações",
    bio: "Atuação em licitações desde 1994. Especialista em recursos, contratos administrativos, pregões eletrônicos e legislação aplicada ao setor público.",
    initials: "LT",
  },
];

const testimonials = [
  {
    quote:
      "A LIGA transformou a forma como participamos de licitações. Aumentamos drasticamente nossa taxa de êxito em pregões eletrônicos.",
    author: "Diretor Comercial",
    company: "Indústria do Setor de Tecnologia",
  },
  {
    quote:
      "Profissionalismo e domínio técnico impecáveis. A análise de editais nos preveniu de armadilhas que custariam caro.",
    author: "Gerente de Contratos",
    company: "Empresa de Engenharia",
  },
  {
    quote:
      "Acompanhamento contínuo e estratégico. Hoje atuamos com segurança em diversos estados do país.",
    author: "Sócio-Proprietário",
    company: "Fornecedor de Serviços Corporativos",
  },
];

export function Team() {
  return (
    <section id="equipe" className="py-24 md:py-32 bg-secondary">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Nossa Equipe"
          title="Profissionais experientes ao seu lado."
        />
        <div className="mt-16 grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {team.map((m, i) => (
            <FadeUp key={m.name} delay={i * 0.1}>
              <div className="group h-full bg-card border border-border hover:border-gold/60 p-10 transition-all hover:shadow-elegant">
                <div className="flex items-center gap-5">
                  <div className="relative h-20 w-20 rounded-full bg-gradient-to-br from-ink to-[oklch(0.2_0.02_60)] flex items-center justify-center text-gold font-display text-2xl border-2 border-gold/40">
                    {m.initials}
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-medium leading-tight">
                      {m.name}
                    </h3>
                    <p className="mt-1 text-sm text-gold">{m.role}</p>
                  </div>
                </div>
                <div className="mt-6 h-px w-full bg-border" />
                <p className="mt-6 text-muted-foreground leading-relaxed">{m.bio}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Prova Social"
          title="Empresas que escolheram crescer no mercado público."
        />
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <FadeUp key={i} delay={i * 0.08}>
              <div className="relative h-full bg-card border border-border p-10 hover:border-gold/50 transition-all hover:-translate-y-1">
                <Quote className="absolute top-6 right-6 h-10 w-10 text-gold/15" />
                <p className="font-display italic text-lg leading-relaxed text-foreground/90">
                  "{t.quote}"
                </p>
                <div className="mt-8 pt-6 border-t border-border">
                  <p className="font-medium text-sm">{t.author}</p>
                  <p className="text-xs text-muted-foreground mt-1">{t.company}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
