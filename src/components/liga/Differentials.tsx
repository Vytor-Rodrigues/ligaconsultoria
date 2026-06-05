import { FadeUp, SectionHeader } from "./Section";
import { Award, ShieldCheck, Briefcase, Route, BookOpen, Trophy } from "lucide-react";

const diffs = [
  { icon: Award, title: "Atendimento personalizado", desc: "Cada cliente conta com estratégia desenhada sob medida." },
  { icon: ShieldCheck, title: "Redução de riscos documentais", desc: "Análise minuciosa que evita desclassificações." },
  { icon: Briefcase, title: "Experiência prática comprovada", desc: "Décadas em licitações reais e diferentes segmentos." },
  { icon: Route, title: "Do edital ao contrato", desc: "Acompanhamento completo em todas as fases do processo." },
  { icon: BookOpen, title: "Domínio da Lei 14.133/2021", desc: "Atualização constante com a nova legislação." },
  { icon: Trophy, title: "Estratégias competitivas", desc: "Mais propostas vencedoras com margem saudável." },
];

const ways = [
  {
    tag: "01",
    title: "Consultoria Mensal",
    desc: "Gestão contínua para empresas que desejam atuar regularmente no mercado público. Acompanhamento de editais, propostas, recursos e contratos durante todo o mês.",
  },
  {
    tag: "02",
    title: "Consultoria por Projeto",
    desc: "Atuação pontual em processos específicos. Ideal para empresas com licitações esporádicas ou de alta complexidade.",
  },
  {
    tag: "03",
    title: "Auditoria & Estruturação",
    desc: "Diagnóstico, organização e estruturação do setor de licitações da sua empresa, com entregáveis claros e plano de evolução.",
  },
];

export function Differentials() {
  return (
    <section id="diferenciais" className="py-24 md:py-32 bg-secondary">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Nossos Diferenciais"
          title="Por que escolher a LIGA Consultoria."
        />
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {diffs.map((d, i) => (
            <FadeUp key={d.title} delay={i * 0.05}>
              <div className="bg-background p-8 h-full group hover:bg-card transition-colors">
                <div className="flex items-start gap-5">
                  <div className="h-12 w-12 rounded-full bg-ink text-gold inline-flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <d.icon className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-medium">{d.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {d.desc}
                    </p>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Ways() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Formas de Atuação"
          title="Três modelos para acompanhar sua empresa."
          subtitle="Escolha o formato que melhor se adapta ao seu momento e às suas metas no mercado público."
        />
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {ways.map((w, i) => (
            <FadeUp key={w.title} delay={i * 0.08}>
              <div className="group relative h-full p-10 bg-card border border-border hover:border-gold transition-all overflow-hidden hover:shadow-elegant">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold via-crimson to-gold scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700" />
                <div className="font-display text-6xl text-gold/20 group-hover:text-gold/50 transition-colors">
                  {w.tag}
                </div>
                <h3 className="mt-4 font-display text-2xl font-medium">{w.title}</h3>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                  {w.desc}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
