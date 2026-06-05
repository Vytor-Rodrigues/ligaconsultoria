import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
import logo from "@/assets/liga-logo.png.asset.json";
import { WHATSAPP_URL } from "@/lib/liga";

const nav = [
  { href: "#inicio", label: "Início" },
  { href: "#quem-somos", label: "Quem Somos" },
  { href: "#servicos", label: "Serviços" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#equipe", label: "Equipe" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ink/90 backdrop-blur-xl border-b border-white/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-px mx-auto max-w-7xl flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-3">
          <img src={logo.url} alt="LIGA Consultoria" className="h-10 md:h-12 w-auto" />
          <span className="hidden sm:block text-[10px] uppercase tracking-[0.3em] text-gold-soft/80 leading-tight border-l border-white/10 pl-3">
            Consultoria<br />Licitatória
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm text-white/75 hover:text-gold transition-colors relative group"
            >
              {n.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener"
            className="hidden md:inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-ink bg-gradient-to-r from-[oklch(0.82_0.13_82)] to-[oklch(0.7_0.14_70)] hover:shadow-gold transition-all hover:-translate-y-0.5"
          >
            <MessageCircle className="h-4 w-4" />
            Falar com Especialista
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden text-white p-2"
            aria-label="Menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden bg-ink border-t border-white/5 mt-3"
        >
          <div className="container-px mx-auto max-w-7xl py-6 flex flex-col gap-4">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="text-white/80 hover:text-gold py-1"
              >
                {n.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-ink bg-gold"
            >
              <MessageCircle className="h-4 w-4" /> Falar com Especialista
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
