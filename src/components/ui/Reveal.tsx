import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
};

/** Revelação padrão de entrada em cena: sobe, aparece e assenta. */
export function Reveal({
  children,
  delay = 0,
  y = 34,
  className,
  once = true,
}: Props) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.25 }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

/** Título que se revela palavra a palavra, com máscara. */
export function RevealWords({
  text,
  accent,
  className = "h-section",
  delay = 0,
}: {
  text: string;
  accent?: string;
  className?: string;
  delay?: number;
}) {
  const words = text.split(" ");
  const accentWords = accent ? accent.split(" ") : [];

  return (
    <h2 className={className}>
      {[...words, ...accentWords].map((word, i) => {
        const isAccent = i >= words.length;
        return (
          <span
            key={`${word}-${i}`}
            className="inline-block overflow-hidden align-bottom"
          >
            <motion.span
              className={`inline-block ${isAccent ? "accent-serif" : ""}`}
              initial={{ y: "108%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.95,
                delay: delay + i * 0.075,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {word}
              {" "}
            </motion.span>
          </span>
        );
      })}
    </h2>
  );
}
