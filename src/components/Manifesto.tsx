import { manifesto } from "@/data/site";
import { Reveal, RevealWords } from "./ui/Reveal";

export function Manifesto() {
  return (
    <section id="empreendimento" className="relative py-28 sm:py-40">
      <div className="container">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow">{manifesto.eyebrow}</p>
            </Reveal>
            <div className="mt-6 text-sand">
              <RevealWords text={manifesto.title} accent={manifesto.titleAccent} />
            </div>
          </div>

          <div className="lg:col-span-7 lg:pt-16">
            {manifesto.paragraphs.map((paragraph, i) => (
              <Reveal key={i} delay={0.12 + i * 0.1}>
                <p className="lead mb-6 last:mb-0">{paragraph}</p>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Pilares */}
        <div className="mt-24 grid gap-px overflow-hidden rounded-xl2 border border-sand/10 bg-sand/10 sm:grid-cols-3">
          {manifesto.pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 0.12} className="h-full">
              <article className="group h-full bg-ink px-8 py-12 transition-colors duration-700 hover:bg-ink-2">
                <span className="font-display text-[0.66rem] tracking-label text-gold/70">
                  0{i + 1}
                </span>
                <h3 className="mt-6 font-display text-xl font-medium text-sand">
                  {pillar.title}
                </h3>
                <p className="lead mt-4 text-[0.95rem]">{pillar.text}</p>
                <div className="mt-8 h-px w-10 bg-gold/40 transition-all duration-700 ease-smooth group-hover:w-full" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
