import { depoimentos } from "@/data/site";
import { Reveal, RevealWords } from "./ui/Reveal";

export function Depoimentos() {
  return (
    <section className="relative bg-ink-2 py-28 sm:py-40">
      <div className="container">
        <div className="max-w-2xl">
          <Reveal>
            <p className="eyebrow">{depoimentos.eyebrow}</p>
          </Reveal>
          <div className="mt-6 text-sand">
            <RevealWords
              text={depoimentos.title}
              accent={depoimentos.titleAccent}
            />
          </div>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {depoimentos.items.map((item, i) => (
            <Reveal key={i} delay={i * 0.12} className="h-full">
              <figure className="glass flex h-full flex-col rounded-xl2 p-9">
                <span
                  className="font-serif text-5xl leading-none text-gold"
                  aria-hidden="true"
                >
                  &ldquo;
                </span>
                <blockquote className="mt-5 flex-1 text-[0.98rem] leading-relaxed text-sand/85">
                  {item.quote}
                </blockquote>
                <figcaption className="mt-8 border-t border-sand/10 pt-6">
                  <p className="font-display text-sm text-sand">{item.author}</p>
                  <p className="mt-1 font-display text-[0.62rem] uppercase tracking-label text-mist">
                    {item.role}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
