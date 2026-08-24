import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { hero, whatsappUrl } from "@/data/site";
import { Counter } from "./ui/Counter";
import { Figure } from "./ui/Figure";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Paralaxe: a imagem sai mais devagar que o texto.
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-14%"]);
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  const rise = {
    initial: { opacity: 0, y: 42 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="topo"
      ref={ref}
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28"
    >
      {/* Fundo */}
      <motion.div className="absolute inset-0" style={{ y: imageY }}>
        <Figure
          src={hero.image}
          alt="Fachada do edifício SKYGLASSES ao entardecer"
          className="h-[120%] w-full"
          label="Fachada SKYGLASSES"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/60" />
      </motion.div>
      <div className="vignette grain absolute inset-0" />

      {/* Conteúdo */}
      <motion.div
        className="container relative z-10 py-20"
        style={{ y: contentY, opacity: fade }}
      >
        <div className="max-w-3xl">
          <motion.p
            className="eyebrow"
            {...rise}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            {hero.eyebrow}
          </motion.p>

          <h1 className="h-display mt-7 text-sand">
            {hero.titleLines.map((line, i) => (
              <span key={line} className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={{ y: "108%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 1.1,
                    delay: 0.3 + i * 0.12,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
            <span className="block overflow-hidden">
              <motion.span
                className="accent-serif block"
                initial={{ y: "108%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 1.1,
                  delay: 0.3 + hero.titleLines.length * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {hero.titleAccent}
              </motion.span>
            </span>
          </h1>

          <motion.p
            className="lead mt-8 max-w-xl"
            {...rise}
            transition={{ duration: 0.9, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {hero.description}
          </motion.p>

          <motion.div
            className="mt-11 flex flex-wrap items-center gap-4"
            {...rise}
            transition={{ duration: 0.9, delay: 0.95, ease: [0.16, 1, 0.3, 1] }}
          >
            <a href={whatsappUrl()} target="_blank" rel="noreferrer" className="btn-gold">
              {hero.primaryCta}
            </a>
            <a href="#empreendimento" className="btn-ghost">
              {hero.secondaryCta}
            </a>
          </motion.div>

          {/* Números */}
          <motion.dl
            className="mt-16 flex flex-wrap gap-x-14 gap-y-8 border-t border-sand/10 pt-9"
            {...rise}
            transition={{ duration: 0.9, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
          >
            {hero.stats.map((stat) => (
              <div key={stat.label}>
                <dt className="font-display text-4xl font-semibold tracking-tightest text-gold">
                  <Counter to={stat.value} suffix={stat.suffix} />
                </dt>
                <dd className="mt-1.5 font-display text-[0.66rem] uppercase tracking-label text-mist">
                  {stat.label}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>
      </motion.div>

      {/* Indicador de rolagem */}
      <motion.div
        className="absolute bottom-9 left-1/2 z-10 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.7, duration: 1 }}
      >
        <div className="flex h-12 w-7 items-start justify-center rounded-full border border-sand/25 p-2">
          <motion.span
            className="h-1.5 w-1 rounded-full bg-gold"
            animate={{ y: [0, 14, 0], opacity: [1, 0.2, 1] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
