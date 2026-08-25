import { edificio } from "@/data/site";
import { CursorTag } from "./ui/CursorTag";
import { Figure } from "./ui/Figure";
import { Reveal, RevealWords } from "./ui/Reveal";

const spanClass = (span?: string) => (span === "wide" ? "sm:col-span-2" : "");

export function Edificio() {
  return (
    <section id="edificio" className="panel-dark relative py-28 sm:py-40">
      <div className="container">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <Reveal>
              <p className="eyebrow text-gold">{edificio.eyebrow}</p>
            </Reveal>
            <div className="mt-7">
              <RevealWords
                text={edificio.title}
                accent={edificio.titleAccent}
                accentClassName="accent-serif text-cream/45"
              />
            </div>
          </div>

          <div className="lg:col-span-5 lg:col-start-8 lg:pt-4">
            {edificio.paragraphs.map((paragraph, i) => (
              <Reveal key={i} delay={0.1 + i * 0.1}>
                <p className="lead mb-6 text-cream/60 last:mb-0">{paragraph}</p>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Pilares */}
        <div className="mt-24 grid gap-px overflow-hidden border-y border-cream/12 bg-cream/12 sm:grid-cols-3">
          {edificio.pillars.map((pillar, i) => (
            <Reveal key={pillar.n} delay={i * 0.1} className="h-full">
              <article className="group h-full bg-ink px-7 py-11 transition-colors duration-700 hover:bg-ink-2">
                <span className="font-display text-[0.65rem] tracking-label text-gold">
                  {pillar.n}
                </span>
                <h3 className="mt-6 font-display text-xl font-semibold tracking-tighter2">
                  {pillar.title}
                </h3>
                <p className="mt-3.5 text-[0.93rem] leading-relaxed text-cream/55">
                  {pillar.text}
                </p>
                <div className="mt-8 h-px w-9 bg-gold/50 transition-all duration-700 ease-smooth group-hover:w-full" />
              </article>
            </Reveal>
          ))}
        </div>

        {/* Galeria do edifício */}
        <div className="mt-6 grid auto-rows-[240px] grid-cols-1 gap-5 sm:grid-cols-3 sm:auto-rows-[280px]">
          {edificio.gallery.map((shot, i) => (
            <Reveal key={shot.src + i} delay={(i % 3) * 0.09} className={`h-full ${spanClass(shot.span)}`}>
              <CursorTag label="Ampliar" className="group h-full overflow-hidden rounded-xl2">
                <figure className="relative h-full">
                  <Figure
                    src={shot.src}
                    alt={shot.caption}
                    className="absolute inset-0 h-full w-full"
                    imgClassName="transition-transform duration-[1600ms] ease-smooth group-hover:scale-[1.08]"
                    label={shot.caption}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-transparent to-transparent" />
                  <figcaption className="absolute bottom-5 left-6 font-display text-[0.7rem] tracking-wide text-cream/85">
                    {shot.caption}
                  </figcaption>
                </figure>
              </CursorTag>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
