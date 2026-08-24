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
        scrolled ? "bg-ink/80 backdrop-blur-xl border-b border-sand/10" : ""
      }`}
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <nav className="container flex items-center justify-between py-5">
        <a
          href="#topo"
          className="font-display text-sm font-semibold tracking-[0.22em] text-sand"
        >
          {brand.name}
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-display text-[0.78rem] text-mist transition-colors duration-500 hover:text-gold"
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
            className="btn-gold hidden !px-6 !py-2.5 sm:inline-flex"
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
              className={`h-px w-6 bg-sand transition-transform duration-500 ${
                open ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-6 bg-sand transition-transform duration-500 ${
                open ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Menu mobile */}
      <motion.div
        className="overflow-hidden border-t border-sand/10 bg-ink/95 backdrop-blur-xl lg:hidden"
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
                className="block py-3 font-display text-lg text-sand transition-colors hover:text-gold"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-4">
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noreferrer"
              className="btn-gold w-full"
            >
              Falar com corretor
            </a>
          </li>
        </ul>
      </motion.div>
    </motion.header>
  );
}
