import { useState } from "react";
import { brand, contato, whatsappUrl } from "@/data/site";
import { Reveal, RevealWords } from "./ui/Reveal";

const field =
  "w-full rounded-xl border border-sand/15 bg-ink/60 px-5 py-4 font-display text-[0.92rem] text-sand placeholder:text-mist/60 outline-none transition-colors duration-500 focus:border-gold";

/**
 * O formulário não depende de backend: ele monta a mensagem e abre o WhatsApp
 * da imobiliária já preenchido. Menos atrito para o lead e nada para manter.
 */
export function Contato() {
  const [form, setForm] = useState({
    nome: "",
    telefone: "",
    interesse: contato.interesses[0],
    mensagem: "",
  });

  const set = (key: keyof typeof form) => (value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = [
      `Olá! Meu nome é ${form.nome}.`,
      `Tenho interesse no SKYGLASSES: ${form.interesse}.`,
      form.mensagem && `Observação: ${form.mensagem}`,
      form.telefone && `Meu telefone: ${form.telefone}`,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(whatsappUrl(text), "_blank", "noopener");
  };

  return (
    <section id="contato" className="relative overflow-hidden py-28 sm:py-40">
      {/* Brilho quente ao fundo, para fechar a página em tom acolhedor */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[560px] w-[900px] -translate-x-1/2 opacity-25 blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, rgba(227,168,87,0.5) 0%, transparent 70%)",
        }}
      />

      <div className="container relative">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <Reveal>
              <p className="eyebrow">{contato.eyebrow}</p>
            </Reveal>
            <div className="mt-6 text-sand">
              <RevealWords text={contato.title} accent={contato.titleAccent} />
            </div>
            <Reveal delay={0.15}>
              <p className="lead mt-7 max-w-md">{contato.description}</p>
            </Reveal>

            <Reveal delay={0.22}>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noreferrer"
                className="btn-gold mt-10"
              >
                {contato.whatsappCta}
              </a>
            </Reveal>

            <Reveal delay={0.3}>
              <dl className="mt-14 space-y-5 border-t border-sand/10 pt-9">
                <div>
                  <dt className="font-display text-[0.62rem] uppercase tracking-label text-mist">
                    Telefone
                  </dt>
                  <dd className="mt-1.5 text-sand/90">{brand.phoneDisplay}</dd>
                </div>
                <div>
                  <dt className="font-display text-[0.62rem] uppercase tracking-label text-mist">
                    E-mail
                  </dt>
                  <dd className="mt-1.5 text-sand/90">{brand.email}</dd>
                </div>
                <div>
                  <dt className="font-display text-[0.62rem] uppercase tracking-label text-mist">
                    Stand de vendas
                  </dt>
                  <dd className="mt-1.5 text-sand/90">{brand.standAddress}</dd>
                </div>
              </dl>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <form onSubmit={handleSubmit} className="glass rounded-xl2 p-8 sm:p-10">
              <div className="space-y-4">
                <input
                  required
                  className={field}
                  placeholder="Seu nome"
                  aria-label="Seu nome"
                  value={form.nome}
                  onChange={(e) => set("nome")(e.target.value)}
                />
                <input
                  required
                  type="tel"
                  className={field}
                  placeholder="Seu WhatsApp"
                  aria-label="Seu WhatsApp"
                  value={form.telefone}
                  onChange={(e) => set("telefone")(e.target.value)}
                />
                <select
                  className={field}
                  aria-label="Interesse"
                  value={form.interesse}
                  onChange={(e) => set("interesse")(e.target.value)}
                >
                  {contato.interesses.map((option) => (
                    <option key={option} value={option} className="bg-ink-2">
                      {option}
                    </option>
                  ))}
                </select>
                <textarea
                  rows={4}
                  className={`${field} resize-none`}
                  placeholder="Quer contar algo antes da visita? (opcional)"
                  aria-label="Mensagem"
                  value={form.mensagem}
                  onChange={(e) => set("mensagem")(e.target.value)}
                />
              </div>

              <button type="submit" className="btn-gold mt-7 w-full">
                {contato.formCta}
              </button>

              <p className="mt-5 text-center text-[0.72rem] leading-relaxed text-mist">
                {contato.disclaimer}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
