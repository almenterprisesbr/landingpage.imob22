import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { brand, navLinks, whatsappUrl } from "@/data/site";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ease-smooth ${
        scrolled ? "border-b border-cream/10 bg-ink/80 backdrop-blur-xl" : ""
      }`}
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
    >
      <nav
        className={`container flex items-center justify-between py-5 transition-colors duration-700 ${
          scrolled ? "text-cream" : "text-ink"
        }`}
      >
        <a href="#abertura" className="flex items-baseline gap-2.5">
          <span className="font-display text-sm font-bold tracking-[0.2em]">
            {brand.building}
          </span>
          <span className="hidden font-display text-[0.6rem] tracking-label opacity-45 sm:inline">
            {brand.city}
          </span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-display text-[0.78rem] opacity-60 transition-opacity duration-500 hover:opacity-100"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noreferrer"
            className={`btn hidden !px-6 !py-2.5 sm:inline-flex ${scrolled ? "bg-gold text-ink hover:bg-gold-soft" : "bg-ink text-cream hover:bg-ink-3"}`}
          >
            Falar com corretor
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menu"
            aria-expanded={open}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          >
            <span
              className={`h-px w-6 bg-current transition-transform duration-500 ${
                open ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-6 bg-current transition-transform duration-500 ${
                open ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      <motion.div
        className="overflow-hidden border-t border-ink/10 bg-cream lg:hidden"
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <ul className="container flex flex-col gap-1 py-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-3 font-display text-lg text-ink transition-colors hover:text-gold-deep"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-4">
            <a href={whatsappUrl()} target="_blank" rel="noreferrer" className="btn-ink w-full">
              Falar com corretor
            </a>
          </li>
        </ul>
      </motion.div>
    </motion.header>
  );
}
