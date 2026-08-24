import { lazer } from "@/data/site";
import { Figure } from "./ui/Figure";
import { Reveal, RevealWords } from "./ui/Reveal";

/** Mosaico editorial: alguns itens ocupam mais espaço e quebram o ritmo da grade. */
const spanClass = (span?: string) => {
  if (span === "wide") return "sm:col-span-2";
  if (span === "tall") return "sm:row-span-2 sm:min-h-[520px]";
  return "";
};

export function Lazer() {
  return (
    <section id="lazer" className="relative py-28 sm:py-40">
      <div className="container">
        <div className="max-w-2xl">
          <Reveal>
            <p className="eyebrow">{lazer.eyebrow}</p>
          </Reveal>
          <div className="mt-6 text-sand">
            <RevealWords text={lazer.title} accent={lazer.titleAccent} />
          </div>
          <Reveal delay={0.15}>
            <p className="lead mt-7">{lazer.description}</p>
          </Reveal>
        </div>

        <div className="mt-16 grid auto-rows-[260px] grid-cols-1 gap-5 sm:grid-cols-3">
          {lazer.items.map((item, i) => (
            <Reveal
              key={item.id}
              delay={(i % 3) * 0.1}
              className={`h-full ${spanClass(item.span)}`}
            >
              <article className="group relative h-full overflow-hidden rounded-xl2 border border-sand/10">
                <Figure
                  src={item.image}
                  alt={item.name}
                  className="absolute inset-0 h-full w-full"
                  imgClassName="transition-transform duration-[1400ms] ease-smooth group-hover:scale-110"
                  label={item.name}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-transparent opacity-90 transition-opacity duration-700 group-hover:opacity-100" />

                <div className="absolute inset-x-0 bottom-0 p-7">
                  <h3 className="font-display text-xl font-medium text-sand">
                    {item.name}
                  </h3>
                  {/* A descrição só aparece na aproximação — mantém o mosaico limpo. */}
                  <p className="mt-2 max-w-sm text-[0.9rem] leading-relaxed text-sand/70 opacity-0 transition-all duration-700 ease-smooth group-hover:opacity-100 sm:translate-y-2 sm:group-hover:translate-y-0">
                    {item.description}
                  </p>
                </div>

                <span className="absolute right-6 top-6 font-display text-[0.6rem] tracking-label text-gold/80">
                  0{i + 1}
                </span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
