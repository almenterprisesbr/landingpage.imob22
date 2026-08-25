import { planta, whatsappUrl } from "@/data/site";
import { Figure } from "./ui/Figure";
import { Reveal, RevealWords } from "./ui/Reveal";

export function Planta() {
  return (
    <section id="planta" className="panel-cream relative py-28 sm:py-40">
      <div className="container">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
          <Reveal>
            <Figure
              src={planta.image}
              alt="Living integrado com cozinha americana"
              className="aspect-[4/5] w-full rounded-xl2"
              label="Living integrado"
            />
          </Reveal>

          <div>
            <Reveal>
              <p className="eyebrow text-ink/50">{planta.eyebrow}</p>
            </Reveal>
            <div className="mt-7">
              <RevealWords
                text={planta.title}
                accent={planta.titleAccent}
                accentClassName="accent-serif text-gold-deep"
              />
            </div>
            <Reveal delay={0.15}>
              <p className="lead mt-7 max-w-md text-ink/65">{planta.description}</p>
            </Reveal>

            <dl className="mt-12 divide-y divide-ink/12 border-y border-ink/12">
              {planta.features.map((feature, i) => (
                <Reveal key={feature.label} delay={0.2 + i * 0.07}>
                  <div className="flex items-baseline justify-between gap-6 py-4">
                    <dt className="font-display text-lg font-medium text-ink">
                      {feature.label}
                    </dt>
                    <dd className="text-right text-[0.9rem] text-ink/50">{feature.detail}</dd>
                  </div>
                </Reveal>
              ))}
            </dl>

            <Reveal delay={0.45}>
              <p className="accent-serif mt-8 text-2xl text-gold-deep">{planta.areaLabel}</p>
            </Reveal>

            <Reveal delay={0.5}>
              <a
                href={whatsappUrl(
                  "Olá! Quero ver a planta completa do SKYGLASSES e as unidades disponíveis."
                )}
                target="_blank"
                rel="noreferrer"
                className="btn-ink mt-9"
              >
                {planta.cta}
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
