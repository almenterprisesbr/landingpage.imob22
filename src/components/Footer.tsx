import { brand, footer, navLinks } from "@/data/site";

export function Footer() {
  return (
    <footer className="panel-dark border-t border-cream/10 py-16">
      <div className="container">
        <div className="flex flex-wrap items-start justify-between gap-12">
          <div className="max-w-xs">
            <p className="font-display text-lg font-bold tracking-[0.2em]">
              {brand.building}
            </p>
            <p className="accent-serif mt-3 text-lg text-gold">{brand.tagline}</p>
            <p className="mt-6 font-display text-[0.72rem] text-cream/45">
              Comercialização {brand.company} · {brand.creci}
            </p>
          </div>

          <nav aria-label="Rodapé">
            <ul className="grid grid-cols-2 gap-x-12 gap-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-display text-[0.8rem] text-cream/55 transition-colors duration-500 hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Wordmark grande fechando a página, no espírito da referência */}
        <p className="mt-16 select-none font-display text-[13vw] font-bold leading-[0.8] tracking-tightest text-cream/[0.07]">
          {brand.building}
        </p>

        <p className="mt-10 max-w-3xl border-t border-cream/10 pt-8 text-[0.7rem] leading-relaxed text-cream/40">
          {footer.legal}
        </p>

        <p className="mt-5 font-display text-[0.68rem] text-cream/30">
          © {new Date().getFullYear()} {brand.company}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
