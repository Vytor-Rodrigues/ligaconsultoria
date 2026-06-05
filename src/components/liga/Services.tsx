import { FadeUp, SectionHeader } from "./Section";
import {
  Briefcase,
  Headphones,
  FileText,
  FileSignature,
  GraduationCap,
  Search,
} from "lucide-react";

const services = [
  { icon: Briefcase, title: "Consultoria em Licitações", desc: "Preparação completa para participação em processos licitatórios públicos." },
  { icon: Headphones, title: "Suporte em Pregões", desc: "Acompanhamento estratégico em pregões eletrônicos e presenciais." },
  { icon: FileText, title: "Recursos Administrativos", desc: "Impugnações, recursos e manifestações em todas as fases." },
  { icon: FileSignature, title: "Gestão de Contratos", desc: "Acompanhamento técnico da execução contratual e aditivos." },
  { icon: GraduationCap, title: "Treinamentos", desc: "Capacitação de equipes internas para o setor público." },
  { icon: Search, title: "Auditoria Licitatória", desc: "Diagnóstico, organização e melhoria de processos." },
];

export function Services() {
  return (
    <section id="servicos" className="relative py-24 md:py-32 bg-ink text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_oklch(0.2_0.04_70/0.6)_0%,_transparent_55%)]" />
      <div className="container-px relative mx-auto max-w-7xl">
        <div className="max-w-3xl mx-auto text-center">
          <FadeUp>
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-gold" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
                Nossos Serviços
              </span>
              <span className="h-px w-8 bg-gold" />
            </div>
          </FadeUp>
          <FadeUp delay={0.05}>
            <h2 className="mt-5 font-display text-3xl md:text-5xl font-medium leading-[1.1] text-white">
              Soluções <span className="italic text-gradient-gold">integradas</span>{" "}
              para o mercado público.
            </h2>
          </FadeUp>
        </div>

        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
          {services.map((s, i) => (
            <FadeUp key={s.title} delay={i * 0.05}>
              <div className="group relative bg-ink p-10 h-full hover:bg-white/[0.03] transition-colors">
                <div className="text-[11px] text-gold/70 font-mono mb-8">
                  0{i + 1}
                </div>
                <s.icon className="h-8 w-8 text-gold mb-6" strokeWidth={1.25} />
                <h3 className="font-display text-2xl font-medium text-white">{s.title}</h3>
                <p className="mt-4 text-sm text-white/60 leading-relaxed">{s.desc}</p>
                <div className="mt-8 h-px w-full bg-white/10 relative overflow-hidden">
                  <div className="absolute inset-y-0 left-0 w-0 bg-gold transition-all duration-700 group-hover:w-full" />
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
