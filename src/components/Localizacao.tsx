import { localizacao } from "@/data/site";
import { Figure } from "./ui/Figure";
import { Reveal, RevealWords } from "./ui/Reveal";

export function Localizacao() {
  return (
    <section id="localizacao" className="relative py-28 sm:py-40">
      <div className="container">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div>
            <Reveal>
              <p className="eyebrow">{localizacao.eyebrow}</p>
            </Reveal>
            <div className="mt-6 text-sand">
              <RevealWords
                text={localizacao.title}
                accent={localizacao.titleAccent}
              />
            </div>
            <Reveal delay={0.15}>
              <p className="lead mt-7">{localizacao.description}</p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-8 font-display text-[0.8rem] text-sand/80">
                {localizacao.address}
              </p>
            </Reveal>

            <ul className="mt-10 divide-y divide-sand/10 border-y border-sand/10">
              {localizacao.pois.map((poi, i) => (
                <Reveal key={poi.label} delay={0.24 + i * 0.06}>
                  <li className="flex items-center justify-between py-4">
                    <span className="text-[0.95rem] text-sand/85">{poi.label}</span>
                    <span className="font-display text-[0.72rem] uppercase tracking-label text-gold">
                      {poi.distance}
                    </span>
                  </li>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={0.4}>
              <a
                href={localizacao.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost mt-10"
              >
                Ver no mapa
              </a>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <Figure
              src={localizacao.image}
              alt="Mapa da localização do SKYGLASSES"
              className="aspect-[4/5] w-full rounded-xl2 border border-sand/10"
              label="Mapa da localização"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
