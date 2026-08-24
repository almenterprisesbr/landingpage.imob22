import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { galeria } from "@/data/site";
import { Figure } from "./ui/Figure";
import { Reveal, RevealWords } from "./ui/Reveal";

export function Galeria() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  // Trava a rolagem e permite fechar o lightbox com Esc.
  useEffect(() => {
    if (lightbox === null) return;
    document.body.dataset.locked = "true";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.dataset.locked = "false";
      window.removeEventListener("keydown", onKey);
    };
  }, [lightbox]);

  return (
    <section id="galeria" className="relative bg-ink-2 py-28 sm:py-40">
      <div className="container">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div className="max-w-xl">
            <Reveal>
              <p className="eyebrow">{galeria.eyebrow}</p>
            </Reveal>
            <div className="mt-6 text-sand">
              <RevealWords text={galeria.title} accent={galeria.titleAccent} />
            </div>
          </div>
          <Reveal delay={0.15}>
            <p className="lead max-w-sm text-[0.9rem]">{galeria.description}</p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 lg:grid-cols-3">
          {galeria.images.map((image, i) => (
            <Reveal key={image.src} delay={(i % 3) * 0.09}>
              <button
                type="button"
                onClick={() => setLightbox(i)}
                className="group relative block w-full overflow-hidden rounded-xl2 border border-sand/10"
                aria-label={`Ampliar: ${image.caption}`}
              >
                <Figure
                  src={image.src}
                  alt={image.caption}
                  className="aspect-[4/5] w-full"
                  imgClassName="transition-transform duration-[1400ms] ease-smooth group-hover:scale-110"
                  label={image.caption}
                />
                <div className="absolute inset-0 bg-ink/45 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                <span className="absolute bottom-5 left-5 text-left font-display text-[0.66rem] uppercase tracking-label text-sand opacity-0 transition-all duration-700 group-hover:opacity-100">
                  {image.caption}
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null ? (
          <motion.div
            className="fixed inset-0 z-[90] flex items-center justify-center bg-ink/95 p-6 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45 }}
            onClick={() => setLightbox(null)}
          >
            <motion.div
              className="w-full max-w-5xl"
              initial={{ scale: 0.94, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.94, y: 20 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <Figure
                src={galeria.images[lightbox].src}
                alt={galeria.images[lightbox].caption}
                className="aspect-[16/10] w-full rounded-xl2"
                label={galeria.images[lightbox].caption}
              />
              <p className="mt-5 text-center font-display text-[0.66rem] uppercase tracking-label text-sand/70">
                {galeria.images[lightbox].caption}
              </p>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
