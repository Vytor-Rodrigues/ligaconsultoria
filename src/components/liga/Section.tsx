import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export function FadeUp({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <FadeUp>
          <div className={`flex items-center gap-3 ${align === "center" ? "justify-center" : ""}`}>
            <span className="h-px w-8 bg-gold" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              {eyebrow}
            </span>
            <span className="h-px w-8 bg-gold" />
          </div>
        </FadeUp>
      )}
      <FadeUp delay={0.05}>
        <h2 className="mt-5 font-display text-3xl md:text-5xl font-medium leading-[1.1] text-foreground">
          {title}
        </h2>
      </FadeUp>
      {subtitle && (
        <FadeUp delay={0.1}>
          <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
            {subtitle}
          </p>
        </FadeUp>
      )}
    </div>
  );
}
