import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 30, suffix: "+", label: "Anos de experiência acumulada", prefix: "" },
  { value: 500, suffix: "+", label: "Processos licitatórios acompanhados", prefix: "" },
  { value: 12, suffix: "", label: "Segmentos de atuação", prefix: "" },
  { value: 100, suffix: "%", label: "Domínio da Lei 14.133/2021", prefix: "" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1600;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="relative bg-ink text-white py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_oklch(0.18_0.02_70)_0%,_transparent_60%)]" />
      <div className="container-px relative mx-auto max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-ink p-8 md:p-10 group hover:bg-white/[0.02] transition-colors"
            >
              <div className="font-display text-5xl md:text-6xl font-medium text-gradient-gold leading-none">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-4 h-px w-8 bg-gold group-hover:w-16 transition-all duration-500" />
              <p className="mt-4 text-sm text-white/60 leading-relaxed">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
