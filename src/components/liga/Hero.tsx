import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, ShieldCheck, Scale, Gavel } from "lucide-react";
import hero from "@/assets/hero-boardroom.jpg";
import { WHATSAPP_URL } from "@/lib/liga";

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden bg-ink text-white">
      <div className="absolute inset-0">
        <img
          src={hero}
          alt="Ambiente corporativo de licitações"
          className="h-full w-full object-cover"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/40" />
      </div>

      {/* gold accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent" />

      <div className="container-px relative z-10 mx-auto max-w-7xl pt-32 pb-24 md:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-12 bg-gold" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold">
              Consultoria Licitatória
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.05]">
            Sua empresa preparada para{" "}
            <span className="italic text-gradient-gold">vencer licitações</span>{" "}
            públicas.
          </h1>

          <p className="mt-8 max-w-2xl text-lg md:text-xl text-white/70 leading-relaxed">
            Consultoria especializada em licitações, contratos administrativos e
            estratégia para atuação no mercado público — com mais de 30 anos de
            experiência acumulada.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[oklch(0.82_0.13_82)] to-[oklch(0.68_0.14_65)] px-7 py-4 text-sm font-semibold text-ink shadow-gold hover:-translate-y-0.5 hover:shadow-[0_25px_60px_-15px_rgba(212,160,58,0.6)] transition-all"
            >
              <MessageCircle className="h-4 w-4" />
              Falar no WhatsApp
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contato"
              className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur px-7 py-4 text-sm font-medium text-white hover:bg-white/10 hover:border-gold/60 transition-all"
            >
              Solicitar Diagnóstico Gratuito
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-6 max-w-xl">
            {[
              { icon: ShieldCheck, label: "Segurança Jurídica" },
              { icon: Scale, label: "Lei 14.133/2021" },
              { icon: Gavel, label: "Pregões & Recursos" },
            ].map(({ icon: Icon, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.1, duration: 0.6 }}
                className="flex flex-col items-start gap-2 border-l border-white/10 pl-4"
              >
                <Icon className="h-5 w-5 text-gold" strokeWidth={1.5} />
                <span className="text-xs text-white/60 leading-tight">{label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] text-white/40 flex flex-col items-center gap-2"
      >
        <span>Role para descobrir</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="h-8 w-px bg-gradient-to-b from-gold to-transparent"
        />
      </motion.div>
    </section>
  );
}
