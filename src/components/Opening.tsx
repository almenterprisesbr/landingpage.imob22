import { motion } from "framer-motion";
import { opening } from "@/data/site";
import { Figure } from "./ui/Figure";
import { MagneticButton } from "./ui/MagneticButton";
import { whatsappUrl } from "@/data/site";

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
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <motion.div className="flex items-center gap-3" {...rise(0.15)}>
              <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse-soft" />
              <p className="eyebrow text-ink/60">{opening.eyebrow}</p>
            </motion.div>

            <motion.h2 className="h-section mt-8" {...rise(0.25)}>
              {opening.title}{" "}
              <span className="accent-serif text-gold-deep">{opening.titleAccent}</span>
            </motion.h2>

            <motion.p className="lead mt-8 max-w-xl text-ink/70" {...rise(0.38)}>
              {opening.description}
            </motion.p>

            <motion.div {...rise(0.48)}>
              <MagneticButton
                href={whatsappUrl()}
                className="btn-ink mt-10"
                target="_blank"
                rel="noreferrer"
              >
                Falar com um corretor
              </MagneticButton>
            </motion.div>

            <motion.dl
              className="mt-16 grid grid-cols-2 gap-px overflow-hidden border-y border-ink/12 bg-ink/12 sm:grid-cols-4"
              {...rise(0.55)}
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

          {/* Coluna da imagem: um recorte da torre com uma etiqueta flutuante,
              para o painel não abrir só com texto. */}
          <motion.div
            className="relative lg:col-span-5"
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <Figure
              src={opening.image}
              alt="O SKYGLASSES ao entardecer"
              className="aspect-[3/4] w-full rounded-xl2"
              label="Torre ao entardecer"
            />
            <div className="pointer-events-none absolute inset-0 rounded-xl2 ring-1 ring-inset ring-ink/10" />

            <motion.div
              className="glass-light absolute -bottom-6 -left-6 max-w-[220px] rounded-xl border border-ink/10 bg-cream px-5 py-4 shadow-[0_20px_60px_-20px_rgba(10,12,15,0.35)]"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="font-display text-[0.68rem] font-medium text-ink">
                {opening.badge.title}
              </p>
              <p className="mt-1 text-[0.78rem] leading-snug text-ink/55">
                {opening.badge.text}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
