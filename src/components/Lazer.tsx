import { lazer } from "@/data/site";
import { Figure } from "./ui/Figure";
import { Reveal, RevealWords } from "./ui/Reveal";

export function Lazer() {
  return (
    <section id="lazer" className="panel-dark relative py-28 sm:py-40">
      <div className="container">
        <div className="max-w-2xl">
          <Reveal>
            <p className="eyebrow text-gold">{lazer.eyebrow}</p>
          </Reveal>
          <div className="mt-7">
            <RevealWords
              text={lazer.title}
              accent={lazer.titleAccent}
              accentClassName="accent-serif text-cream/45"
            />
          </div>
          <Reveal delay={0.15}>
            <p className="lead mt-7 text-cream/60">{lazer.description}</p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Imagem em destaque, fixa enquanto a lista rola ao lado */}
          <Reveal className="lg:col-span-5">
            <figure className="lg:sticky lg:top-28">
              <Figure
                src={lazer.featured.src}
                alt={lazer.featured.caption}
                className="aspect-[3/4] w-full rounded-xl2"
                label={lazer.featured.caption}
              />
              <figcaption className="eyebrow mt-4 text-cream/40">
                {lazer.featured.caption}
              </figcaption>
            </figure>
          </Reveal>

          {/* A lista editorial carrega a seção — não depende de foto de cada área */}
          <div className="lg:col-span-6 lg:col-start-7">
            <ul className="divide-y divide-cream/12 border-y border-cream/12">
              {lazer.items.map((item, i) => (
                <Reveal key={item.n} delay={i * 0.06}>
                  <li className="group flex gap-6 py-7 transition-colors duration-500 sm:gap-10">
                    <span className="font-display text-[0.65rem] tracking-label text-gold pt-2">
                      {item.n}
                    </span>
                    <div>
                      <h3 className="h-sub transition-transform duration-700 ease-smooth group-hover:translate-x-1.5">
                        {item.name}
                      </h3>
                      <p className="mt-2.5 max-w-sm text-[0.93rem] leading-relaxed text-cream/50">
                        {item.text}
                      </p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
