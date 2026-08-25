import { motion } from "framer-motion";
import { opening } from "@/data/site";

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 26 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.95, delay, ease: [0.16, 1, 0.3, 1] as const },
});

/**
 * Primeira tela depois da introdução.
 * É renderizada duas vezes de propósito: uma dentro do painel que sobe e outra
 * no topo da página. Mesmo fundo e mesmo layout, então a troca não aparece.
 */
export function Opening() {
  return (
    <section
      id="abertura"
      className="panel-cream flex h-full min-h-screen flex-col justify-center py-24"
    >
      <div className="container">
        <motion.div className="flex items-center gap-3" {...rise(0.15)}>
          <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse-soft" />
          <p className="eyebrow text-ink/60">{opening.eyebrow}</p>
        </motion.div>

        <motion.h2 className="h-section mt-8 max-w-4xl" {...rise(0.25)}>
          {opening.title}{" "}
          <span className="accent-serif text-gold-deep">{opening.titleAccent}</span>
        </motion.h2>

        <motion.p className="lead mt-8 max-w-xl text-ink/70" {...rise(0.38)}>
          {opening.description}
        </motion.p>

        <motion.dl
          className="mt-16 grid grid-cols-2 gap-px overflow-hidden border-y border-ink/12 bg-ink/12 sm:grid-cols-4"
          {...rise(0.5)}
        >
          {opening.stats.map((stat) => (
            <div key={stat.label} className="bg-cream px-1 py-7">
              <dt className="font-display text-4xl font-semibold tracking-tightest text-ink sm:text-5xl">
                {stat.value}
              </dt>
              <dd className="eyebrow mt-2.5 text-ink/50">{stat.label}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
