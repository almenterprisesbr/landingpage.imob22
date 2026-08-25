import { localizacao } from "@/data/site";
import { Figure } from "./ui/Figure";
import { Reveal, RevealWords } from "./ui/Reveal";

export function Localizacao() {
  return (
    <section id="localizacao" className="panel-dark relative py-28 sm:py-40">
      <div className="container">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div>
            <Reveal>
              <p className="eyebrow text-gold">{localizacao.eyebrow}</p>
            </Reveal>
            <div className="mt-7">
              <RevealWords
                text={localizacao.title}
                accent={localizacao.titleAccent}
                accentClassName="accent-serif text-cream/45"
              />
            </div>
            <Reveal delay={0.15}>
              <p className="lead mt-7 max-w-md text-cream/60">{localizacao.description}</p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-8 font-display text-[0.85rem] text-cream/80">
                {localizacao.address}
              </p>
            </Reveal>

            <ul className="mt-10 divide-y divide-cream/12 border-y border-cream/12">
              {localizacao.pois.map((poi, i) => (
                <Reveal key={poi.label} delay={0.24 + i * 0.06}>
                  <li className="flex items-center justify-between py-4">
                    <span className="text-[0.95rem] text-cream/85">{poi.label}</span>
                    <span className="eyebrow text-gold">{poi.distance}</span>
                  </li>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={0.45}>
              <a
                href={localizacao.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-outline-light mt-10"
              >
                Ver no mapa
              </a>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <Figure
              src={localizacao.image}
              alt="O SKYGLASSES na esquina, com a orla ao fundo"
              className="aspect-[4/5] w-full rounded-xl2"
              label="Implantação na quadra"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
