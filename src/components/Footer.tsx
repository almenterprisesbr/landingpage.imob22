import { brand, footer, navLinks } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-sand/10 bg-ink-2 py-16">
      <div className="container">
        <div className="flex flex-wrap items-start justify-between gap-12">
          <div className="max-w-xs">
            <p className="font-display text-lg font-semibold tracking-[0.22em] text-sand">
              {brand.name}
            </p>
            <p className="mt-3 font-serif text-base italic text-gold">
              {brand.tagline}
            </p>
            <p className="mt-6 font-display text-[0.72rem] text-mist">
              Comercialização {brand.imobiliaria} · {brand.creci}
            </p>
          </div>

          <nav aria-label="Rodapé">
            <ul className="grid grid-cols-2 gap-x-12 gap-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-display text-[0.8rem] text-mist transition-colors duration-500 hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="gold-rule my-12 h-px" />

        <p className="max-w-3xl text-[0.7rem] leading-relaxed text-mist">
          {footer.legal}
        </p>

        <p className="mt-6 font-display text-[0.68rem] text-mist/70">
          © {new Date().getFullYear()} {brand.imobiliaria}. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
