import { FadeUp } from "./Section";
import about from "@/assets/about-team.png";
import { CheckCircle2 } from "lucide-react";

const pillars = [
  "Sólida experiência em licitações públicas",
  "Gestão administrativa e jurídica integrada",
  "Estratégia, segurança e eficiência",
];

export function About() {
  return (
    <section id="quem-somos" className="relative py-24 md:py-36 bg-background">
      <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <FadeUp>
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-32 h-32 border-l-2 border-t-2 border-gold" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r-2 border-b-2 border-crimson" />
            <img
              src={about}
              alt="Equipe LIGA Consultoria"
              loading="lazy"
              width={1280}
              height={1280}
              className="relative w-full object-cover shadow-elegant"
            />
          </div>
        </FadeUp>

        <div>
          <FadeUp>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-gold" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
                Quem Somos
              </span>
            </div>
          </FadeUp>
          <FadeUp delay={0.05}>
            <h2 className="mt-5 font-display text-4xl md:text-5xl font-medium leading-[1.1]">
              Experiência que <span className="italic text-crimson">transforma</span>{" "}
              processos em <span className="italic text-gradient-gold">resultados</span>.
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="mt-6 space-y-5 text-muted-foreground leading-relaxed">
              <p>
                A <strong className="text-foreground">LIGA Consultoria Licitatória</strong>{" "}
                nasceu da união de duas profissionais, Lisiane e Gabriela, cuja
                parceria inspirou o nome da empresa. Com sólida experiência em
                licitações, gestão administrativa, relacionamento empresarial e
                assessoria jurídica, ambas compartilharam o propósito de oferecer
                soluções estratégicas e eficientes para empresas que desejam atuar
                no mercado público.
              </p>
              <p>
                Com o passar dos anos, Gabriela decidiu seguir sua vocação de
                infância e direcionou sua trajetória para a área da saúde, onde
                encontrou a realização de um grande sonho profissional. A partir
                desse momento, Lisiane assumiu integralmente a condução da LIGA
                Consultoria Licitatória, consolidando sua atuação em uma área
                pela qual já era apaixonada desde a adolescência.
              </p>
              <p>
                Movida pelo compromisso com a excelência, ética e resultados,
                Lisiane transformou a LIGA em uma referência no suporte a
                empresas que buscam participar de licitações e contratar com a
                Administração Pública. Sua experiência, dedicação e constante
                atualização permitem oferecer um atendimento personalizado,
                seguro e estratégico, contribuindo para o crescimento e o
                sucesso dos clientes em um mercado cada vez mais competitivo.
              </p>
              <p>
                Hoje, a LIGA Consultoria Licitatória representa não apenas a
                história de uma parceria, mas a continuidade de um sonho
                construído com conhecimento, dedicação e paixão pelo universo
                das licitações públicas.
              </p>
              <p>
                Atuamos lado a lado com nossos clientes, do estudo do edital à
                gestão do contrato, garantindo competitividade e segurança
                jurídica em todas as etapas.
              </p>
            </div>
          </FadeUp>
          <FadeUp delay={0.15}>
            <ul className="mt-8 space-y-3">
              {pillars.map((p) => (
                <li key={p} className="flex items-start gap-3 text-foreground/90">
                  <CheckCircle2 className="h-5 w-5 text-gold mt-0.5 shrink-0" strokeWidth={1.5} />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
