import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { navLinks } from "@/data/site";

/**
 * Trilho de navegação lateral, visível só em telas largas.
 * Marca a seção ativa por observação de interseção — nenhum listener de
 * scroll manual — e permite pular direto para qualquer seção.
 *
 * Carrega o próprio fundo (pílula escura com blur) porque a página alterna
 * seções claras e escuras por baixo dele; sem isso o texto sumiria sobre o
 * creme.
 */
export function SectionRail() {
  const [active, setActive] = useState<string>(navLinks[0].href);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter((el): el is Element => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length === 0) return;
        const topMost = visible.reduce((a, b) => (a.intersectionRatio > b.intersectionRatio ? a : b));
        setActive(`#${topMost.target.id}`);
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: [0, 0.2, 0.5, 0.8, 1] }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      aria-label="Seções da página"
      className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-end gap-3 rounded-full border border-cream/10 bg-ink/75 px-3 py-4 backdrop-blur-md xl:flex"
      initial={{ opacity: 0, x: 12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 1.6 }}
    >
      {navLinks.map((link) => {
        const isActive = active === link.href;
        return (
          <a
            key={link.href}
            href={link.href}
            className="group relative flex items-center justify-end"
            aria-current={isActive ? "true" : undefined}
          >
            <span
              className={`pointer-events-none absolute right-6 whitespace-nowrap rounded-full bg-ink px-3 py-1 font-display text-[0.65rem] uppercase tracking-label text-cream transition-all duration-400 ${
                isActive
                  ? "opacity-0"
                  : "translate-x-1.5 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
              }`}
            >
              {link.label}
            </span>
            <span
              className={`h-1.5 rounded-full transition-all duration-500 ${
                isActive ? "w-5 bg-gold" : "w-1.5 bg-cream/30 group-hover:bg-cream/60"
              }`}
            />
          </a>
        );
      })}
    </motion.nav>
  );
}
