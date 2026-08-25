import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
};

/** Entrada em cena padrão: sobe, aparece e assenta. */
export function Reveal({ children, delay = 0, y = 30, className }: Props) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Título revelado palavra a palavra, com máscara.
 *
 * A detecção de entrada em cena fica no <h2>, nunca nas palavras: cada palavra
 * começa deslocada para fora da caixa com overflow-hidden do pai, e o
 * IntersectionObserver leva o recorte do ancestral em conta — a razão de
 * interseção seria sempre 0 e a animação nunca dispararia.
 */
export function RevealWords({
  text,
  accent,
  className = "h-section",
  accentClassName = "accent-serif text-gold",
  delay = 0,
}: {
  text: string;
  accent?: string;
  className?: string;
  accentClassName?: string;
  delay?: number;
}) {
  const words = text.split(" ");
  const accentWords = accent ? accent.split(" ") : [];

  return (
    <motion.h2
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        visible: { transition: { staggerChildren: 0.07, delayChildren: delay } },
      }}
    >
      {[...words, ...accentWords].map((word, i) => {
        const isAccent = i >= words.length;
        return (
          <span key={`${word}-${i}`} className="inline-block overflow-hidden align-bottom">
            <motion.span
              className={`inline-block ${isAccent ? accentClassName : ""}`}
              variants={{
                hidden: { y: "110%" },
                visible: {
                  y: 0,
                  transition: { duration: 0.95, ease: [0.16, 1, 0.3, 1] },
                },
              }}
            >
              {word}&nbsp;
            </motion.span>
          </span>
        );
      })}
    </motion.h2>
  );
}
