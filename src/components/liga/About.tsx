import { FadeUp } from "./Section";
import about from "@/assets/about-team.jpg";
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
              className="relative w-full aspect-square object-cover grayscale-[20%] shadow-elegant"
            />
            <div className="absolute bottom-8 left-8 right-8 bg-ink/90 backdrop-blur-md p-6 border-l-2 border-gold">
              <p className="font-display italic text-white/90 text-lg leading-snug">
                "Preparar empresas para atuar com segurança, estratégia e
                eficiência no mercado público."
              </p>
              <p className="mt-3 text-xs uppercase tracking-[0.25em] text-gold">— Nossa Missão</p>
            </div>
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
                nasceu da união de profissionais com sólida experiência em
                licitações, gestão administrativa, relacionamento empresarial e
                assessoria jurídica.
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
