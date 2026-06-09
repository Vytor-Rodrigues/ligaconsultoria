import { FadeUp, SectionHeader } from "./Section";
import { Quote } from "lucide-react";

const lisiane = {
  name: "Dra. Lisiane Teixeira",
  role: "Advogada | Especialista em Licitações | Mestranda em Direito pela Universidad Europea del Atlántico",
  bio: [
    "Com atuação no universo das licitações desde 1994, construiu uma sólida trajetória pautada pela excelência técnica, estratégia e compromisso com resultados. Sua experiência abrange todas as fases dos processos licitatórios, desde a análise de editais e participação em certames até a gestão contratual e a defesa de interesses administrativos.",
    "Especialista em recursos administrativos, contratos administrativos, pregões eletrônicos e legislação aplicada ao setor público, estatal e privado, atua de forma consultiva e estratégica, auxiliando empresas a ampliarem suas oportunidades de negócios junto à Administração Pública.",
  ],
  initials: "LT",
  photo: undefined as string | undefined,
};

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
          title="Profissional experiente ao seu lado."
        />
        <div className="mt-16 max-w-3xl mx-auto">
          <FadeUp>
            <div className="group bg-card border border-border hover:border-gold/60 p-10 transition-all hover:shadow-elegant">
              <div className="flex items-center gap-6">
                {lisiane.photo ? (
                  <img
                    src={lisiane.photo}
                    alt={lisiane.name}
                    className="h-24 w-24 rounded-full object-cover border-2 border-gold/40"
                  />
                ) : (
                  <div className="relative h-24 w-24 rounded-full bg-gradient-to-br from-ink to-[oklch(0.2_0.02_60)] flex items-center justify-center text-gold font-display text-3xl border-2 border-gold/40 shrink-0">
                    {lisiane.initials}
                  </div>
                )}
                <div>
                  <h3 className="font-display text-2xl md:text-3xl font-medium leading-tight">
                    {lisiane.name}
                  </h3>
                  <p className="mt-2 text-sm text-gold leading-snug">{lisiane.role}</p>
                </div>
              </div>
              <div className="mt-6 h-px w-full bg-border" />
              <div className="mt-6 space-y-4">
                {lisiane.bio.map((paragraph, i) => (
                  <p key={i} className="text-muted-foreground leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

const clientSectors = [
  "Operadora de Plano de Saúde",
  "Anestesiologistas",
  "Fabricante de Barreiras de Contenção",
  "Operadora de Plano Dentário",
  "Fabricante de Produtos Químicos",
  "Treinamento de Médico",
];

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

        <FadeUp delay={0.15}>
          <div className="mt-20">
            <div className="flex items-center gap-3 justify-center mb-8">
              <span className="h-px w-8 bg-gold" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
                Empresas que já atuei
              </span>
              <span className="h-px w-8 bg-gold" />
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {clientSectors.map((sector) => (
                <span
                  key={sector}
                  className="px-5 py-2 border border-border bg-card text-sm text-muted-foreground hover:border-gold/50 hover:text-foreground transition-colors"
                >
                  {sector}
                </span>
              ))}
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
