import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Mail, Phone, MapPin, Linkedin, Instagram, Facebook } from "lucide-react";
import { FadeUp } from "./Section";
import cta from "@/assets/cta-bg.jpg";
import logo from "@/assets/liga-logo.png";
import { WHATSAPP_URL, CONTACTS } from "@/lib/liga";
import { toast } from "sonner";

export function CTA() {
  return (
    <section className="relative py-32 md:py-40 overflow-hidden text-white">
      <img src={cta} alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/70" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,_oklch(0.5_0.18_25/0.25),_transparent_60%)]" />

      <div className="container-px relative mx-auto max-w-5xl text-center">
        <FadeUp>
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Próximo Passo
          </span>
        </FadeUp>
        <FadeUp delay={0.05}>
          <h2 className="mt-6 font-display text-4xl md:text-6xl lg:text-7xl font-medium leading-[1.05]">
            Vamos construir{" "}
            <span className="italic text-gradient-gold">resultados</span> juntos.
          </h2>
        </FadeUp>
        <FadeUp delay={0.1}>
          <p className="mt-8 max-w-2xl mx-auto text-lg text-white/70 leading-relaxed">
            Sua empresa está preparada para competir no mercado público com
            segurança, estratégia e confiança.
          </p>
        </FadeUp>
        <FadeUp delay={0.15}>
          <div className="mt-12">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener"
              className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[oklch(0.82_0.13_82)] to-[oklch(0.68_0.14_65)] px-10 py-5 text-base font-semibold text-ink shadow-gold hover:-translate-y-1 transition-all"
            >
              <MessageCircle className="h-5 w-5" />
              Agendar Conversa
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

export function Contact() {
  const [loading, setLoading] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Mensagem enviada!", {
        description: "Nossa equipe entrará em contato em breve.",
      });
      (e.target as HTMLFormElement).reset();
    }, 800);
  }

  return (
    <section id="contato" className="py-24 md:py-32 bg-background">
      <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-2 gap-16">
        <div>
          <FadeUp>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-gold" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
                Fale Conosco
              </span>
            </div>
          </FadeUp>
          <FadeUp delay={0.05}>
            <h2 className="mt-5 font-display text-4xl md:text-5xl font-medium leading-[1.1]">
              Entre em contato com nossos{" "}
              <span className="italic text-gradient-gold">especialistas</span>.
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Estamos prontos para entender sua operação e desenhar a melhor
              estratégia para sua atuação em licitações públicas.
            </p>
          </FadeUp>

          <FadeUp delay={0.15}>
            <div className="mt-10 space-y-5">
              {[
                { icon: Mail, label: "E-mail", value: CONTACTS.email, href: `mailto:${CONTACTS.email}` },
                { icon: MessageCircle, label: "WhatsApp Comercial", value: CONTACTS.whatsapp, href: WHATSAPP_URL },
                { icon: Phone, label: "Divalessa", value: CONTACTS.divalessa, href: "tel:+5511910523300" },
                { icon: Phone, label: "Lisiane", value: CONTACTS.lisiane, href: "tel:+555191298787" },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener"
                  className="flex items-center gap-4 group"
                >
                  <div className="h-11 w-11 rounded-full bg-secondary border border-border group-hover:bg-ink group-hover:border-gold group-hover:text-gold inline-flex items-center justify-center transition-all shrink-0">
                    <c.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                      {c.label}
                    </div>
                    <div className="text-foreground group-hover:text-gold transition-colors font-medium">
                      {c.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </FadeUp>
        </div>

        <FadeUp delay={0.2}>
          <motion.form
            onSubmit={onSubmit}
            className="bg-card border border-border p-8 md:p-10 shadow-elegant relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold via-crimson to-gold" />
            <h3 className="font-display text-2xl font-medium">
              Diagnóstico Gratuito
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Preencha o formulário e nossa equipe entrará em contato em até 24h.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-5">
              <Field name="nome" label="Nome" required />
              <Field name="empresa" label="Empresa" required />
              <Field name="telefone" label="Telefone" type="tel" required />
              <Field name="email" label="E-mail" type="email" required />
            </div>
            <div className="mt-5">
              <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
                Mensagem
              </label>
              <textarea
                name="mensagem"
                rows={4}
                required
                className="w-full bg-transparent border-b border-border focus:border-gold outline-none py-2 text-foreground transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-10 w-full group inline-flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-4 text-sm font-semibold text-white hover:bg-gradient-to-r hover:from-[oklch(0.82_0.13_82)] hover:to-[oklch(0.68_0.14_65)] hover:text-ink transition-all disabled:opacity-50"
            >
              {loading ? "Enviando..." : "Quero Participar de Licitações"}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.form>
        </FadeUp>
      </div>
    </section>
  );
}

function Field({
  name,
  label,
  type = "text",
  required,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full bg-transparent border-b border-border focus:border-gold outline-none py-2 text-foreground transition-colors"
      />
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink text-white pt-20 pb-10 border-t border-white/5">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <img src={logo} alt="LIGA Consultoria" className="h-14 w-auto" />
            <p className="mt-6 text-sm text-white/55 leading-relaxed max-w-sm">
              Consultoria Licitatória especializada em preparar empresas para
              vencer no mercado público com segurança jurídica e estratégia.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[Linkedin, Instagram, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Rede social"
                  className="h-10 w-10 rounded-full border border-white/15 inline-flex items-center justify-center text-white/70 hover:text-ink hover:bg-gold hover:border-gold transition-all"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg text-gold">Navegação</h4>
            <ul className="mt-5 space-y-2.5 text-sm text-white/65">
              {["Início", "Quem Somos", "Serviços", "Diferenciais", "Equipe", "Contato"].map(
                (l) => (
                  <li key={l}>
                    <a
                      href={`#${l.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/ /g, "-")}`}
                      className="hover:text-gold transition-colors"
                    >
                      {l}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg text-gold">Contato</h4>
            <ul className="mt-5 space-y-3 text-sm text-white/65">
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 text-gold/70 shrink-0" />
                <a href={`mailto:${CONTACTS.email}`} className="hover:text-gold break-all">
                  {CONTACTS.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MessageCircle className="h-4 w-4 mt-0.5 text-gold/70 shrink-0" />
                {CONTACTS.whatsapp}
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-gold/70 shrink-0" />
                Atendimento em todo o Brasil
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>© {new Date().getFullYear()} LIGA Consultoria Licitatória. Todos os direitos reservados.</p>
          <p className="flex items-center gap-2">
            <span className="h-px w-6 bg-gold/50" />
            Consultoria e Soluções Integradas
          </p>
        </div>
      </div>
    </footer>
  );
}

export function FloatingWhatsApp() {
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring" }}
      className="fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_15px_30px_-5px_rgba(37,211,102,0.5)] hover:scale-110 transition-transform"
      aria-label="WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
    </motion.a>
  );
}
