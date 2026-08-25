import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { obra, whatsappUrl } from "@/data/site";
import { Figure } from "./ui/Figure";
import { Reveal, RevealWords } from "./ui/Reveal";

export function Obra() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section id="obra" ref={ref} className="panel-cream relative overflow-hidden py-28 sm:py-40">
      <div className="container">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse-soft" />
                <p className="eyebrow text-ink/60">{obra.eyebrow}</p>
              </div>
            </Reveal>
            <div className="mt-7">
              <RevealWords
                text={obra.title}
                accent={obra.titleAccent}
                accentClassName="accent-serif text-gold-deep"
              />
            </div>
            <Reveal delay={0.15}>
              <p className="lead mt-7 max-w-md text-ink/65">{obra.description}</p>
            </Reveal>

            <ol className="mt-12 divide-y divide-ink/12 border-y border-ink/12">
              {obra.phases.map((phase, i) => (
                <Reveal key={phase.label} delay={0.2 + i * 0.07}>
                  <li className="flex items-center justify-between gap-6 py-4">
                    <span className="font-display text-[0.95rem] text-ink">{phase.label}</span>
                    <span
                      className={`eyebrow ${
                        phase.status === "Concluída"
                          ? "text-gold-deep"
                          : phase.status === "Em andamento"
                            ? "text-ink"
                            : "text-ink/40"
                      }`}
                    >
                      {phase.status}
                    </span>
                  </li>
                </Reveal>
              ))}
            </ol>

            <Reveal delay={0.5}>
              <a
                href={whatsappUrl(
                  "Olá! Quero receber o book completo da obra do SKYGLASSES."
                )}
                target="_blank"
                rel="noreferrer"
                className="btn-ink mt-9"
              >
                {obra.cta}
              </a>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="lg:col-span-6 lg:col-start-7">
            <div className="h-full min-h-[420px] overflow-hidden rounded-xl2">
              <motion.div style={{ y: imageY }} className="h-[116%] w-full">
                <Figure
                  src={obra.image}
                  alt="Implantação do SKYGLASSES e entorno"
                  className="h-full w-full"
                  label="Implantação e entorno"
                />
              </motion.div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
