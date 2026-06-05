import { FadeUp, SectionHeader } from "./Section";
import {
  Banknote,
  Repeat,
  TrendingUp,
  Layers,
  ShieldCheck,
  Infinity as InfinityIcon,
  FileSearch,
  Target,
  FolderCheck,
  Gavel,
  FileWarning,
  ClipboardList,
} from "lucide-react";

const reasons = [
  { icon: Banknote, title: "Mercado Bilionário", desc: "Trilhões em compras públicas anuais no Brasil." },
  { icon: Repeat, title: "Contratos Recorrentes", desc: "Receitas previsíveis com renovações estruturadas." },
  { icon: TrendingUp, title: "Expansão de Negócios", desc: "Acesso a novos clientes em todo o território nacional." },
  { icon: Layers, title: "Diversificação de Receitas", desc: "Reduz dependência da iniciativa privada." },
  { icon: ShieldCheck, title: "Estabilidade", desc: "Previsibilidade financeira amparada por contrato." },
  { icon: InfinityIcon, title: "Oportunidades Contínuas", desc: "Milhares de editais publicados todos os dias." },
];

const helps = [
  { icon: FileSearch, title: "Análise de Editais", desc: "Leitura técnica e identificação de riscos e oportunidades." },
  { icon: Target, title: "Estratégia de Participação", desc: "Definição de preço, escopo e posicionamento competitivo." },
  { icon: FolderCheck, title: "Organização Documental", desc: "Preparação e validação de toda a documentação exigida." },
  { icon: Gavel, title: "Pregões Eletrônicos", desc: "Operação em sessões presenciais e plataformas digitais." },
  { icon: FileWarning, title: "Recursos Administrativos", desc: "Impugnações, recursos e manifestações qualificadas." },
  { icon: ClipboardList, title: "Gestão de Contratos", desc: "Acompanhamento da execução e medições contratuais." },
];

function Card({
  icon: Icon,
  title,
  desc,
  i,
}: {
  icon: typeof Banknote;
  title: string;
  desc: string;
  i: number;
}) {
  return (
    <FadeUp delay={i * 0.05}>
      <div className="group relative h-full p-8 bg-card border border-border hover:border-gold/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-elegant overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="relative">
          <div className="inline-flex items-center justify-center h-12 w-12 rounded-sm bg-ink text-gold group-hover:bg-gold group-hover:text-ink transition-colors">
            <Icon className="h-5 w-5" strokeWidth={1.5} />
          </div>
          <h3 className="mt-6 font-display text-xl font-medium">{title}</h3>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{desc}</p>
          <div className="mt-6 h-px w-8 bg-border group-hover:bg-gold group-hover:w-16 transition-all duration-500" />
        </div>
      </div>
    </FadeUp>
  );
}

export function WhyPublic() {
  return (
    <section className="py-24 md:py-32 bg-secondary">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Por Que Atuar"
          title="O mercado público é a maior oportunidade da sua empresa."
          subtitle="Mais de um trilhão de reais em compras públicas movimentadas anualmente — com regras claras e contratos previsíveis."
        />
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <Card key={r.title} {...r} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function HowWeHelp() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Como Ajudamos"
          title="Do estudo do edital à execução do contrato."
          subtitle="Atuação completa em todas as etapas do processo licitatório, com método e responsabilidade técnica."
        />
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {helps.map((h, i) => (
            <Card key={h.title} {...h} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
