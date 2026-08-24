import { unidades, whatsappUrl } from "@/data/site";
import { Figure } from "./ui/Figure";
import { Reveal, RevealWords } from "./ui/Reveal";

export function Unidades() {
  const { planta } = unidades;

  return (
    <section id="plantas" className="relative bg-ink-2 py-28 sm:py-40">
      <div className="container">
        <div className="max-w-2xl">
          <Reveal>
            <p className="eyebrow">{unidades.eyebrow}</p>
          </Reveal>
          <div className="mt-6 text-sand">
            <RevealWords text={unidades.title} accent={unidades.titleAccent} />
          </div>
          <Reveal delay={0.15}>
            <p className="lead mt-7">{unidades.description}</p>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="mt-14 grid gap-px overflow-hidden rounded-xl2 border border-sand/10 bg-sand/10 lg:grid-cols-2">
            <Figure
              src={planta.image}
              alt={`Planta ${planta.name}`}
              className="min-h-[340px] bg-ink lg:min-h-[560px]"
              label={`Planta — ${planta.name}`}
            />

            <div className="flex flex-col justify-center bg-ink px-8 py-14 sm:px-12">
              <span className="w-fit rounded-full border border-gold/40 px-4 py-1.5 font-display text-[0.6rem] uppercase tracking-label text-gold">
                {planta.badge}
              </span>

              <h3 className="mt-7 font-display text-4xl font-medium leading-tight tracking-tightest text-sand">
                {planta.name}
              </h3>

              <p className="mt-3 font-serif text-xl italic text-gold">
                {planta.area}
              </p>

              <ul className="mt-10 space-y-4">
                {planta.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-4">
                    <span className="mt-2 h-px w-6 shrink-0 bg-gold/60" />
                    <span className="text-[0.95rem] text-sand/85">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={whatsappUrl(
                  "Olá! Quero conhecer a planta de 2 quartos com suíte do SKYGLASSES."
                )}
                target="_blank"
                rel="noreferrer"
                className="btn-gold mt-12 w-fit"
              >
                Quero conhecer a planta
              </a>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Faixa de destaques em movimento contínuo */}
      <div className="edge-fade-x mt-20 overflow-hidden border-y border-sand/10 py-6">
        <div className="flex w-max animate-marquee gap-10">
          {[...unidades.highlights, ...unidades.highlights].map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-10 whitespace-nowrap font-display text-[0.7rem] uppercase tracking-label text-mist"
            >
              {item}
              <span className="h-1 w-1 rounded-full bg-gold/70" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
