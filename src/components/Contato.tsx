import { useState } from "react";
import { brand, contato, whatsappUrl } from "@/data/site";
import { Reveal, RevealWords } from "./ui/Reveal";

const field =
  "w-full rounded-xl border border-ink/15 bg-transparent px-5 py-4 font-display text-[0.92rem] text-ink placeholder:text-ink/40 outline-none transition-colors duration-500 focus:border-ink";

/**
 * O formulário não depende de backend: monta a mensagem e abre o WhatsApp
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
      `Interesse no SKYGLASSES: ${form.interesse}.`,
      form.mensagem && `Observação: ${form.mensagem}`,
      form.telefone && `Meu telefone: ${form.telefone}`,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(whatsappUrl(text), "_blank", "noopener");
  };

  return (
    <section id="contato" className="panel-cream relative py-28 sm:py-40">
      <div className="container">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <Reveal>
              <p className="eyebrow text-ink/50">{contato.eyebrow}</p>
            </Reveal>
            <div className="mt-7">
              <RevealWords
                text={contato.title}
                accent={contato.titleAccent}
                accentClassName="accent-serif text-gold-deep"
              />
            </div>
            <Reveal delay={0.15}>
              <p className="lead mt-7 max-w-md text-ink/65">{contato.description}</p>
            </Reveal>

            <Reveal delay={0.22}>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noreferrer"
                className="btn-ink mt-10"
              >
                {contato.whatsappCta}
              </a>
            </Reveal>

            <Reveal delay={0.3}>
              <dl className="mt-14 space-y-5 border-t border-ink/12 pt-9">
                <div>
                  <dt className="eyebrow text-ink/45">Telefone</dt>
                  <dd className="mt-1.5 text-ink/85">{brand.phoneDisplay}</dd>
                </div>
                <div>
                  <dt className="eyebrow text-ink/45">E-mail</dt>
                  <dd className="mt-1.5 text-ink/85">{brand.email}</dd>
                </div>
                <div>
                  <dt className="eyebrow text-ink/45">Empreendimento</dt>
                  <dd className="mt-1.5 text-ink/85">
                    {brand.building} · {brand.city}
                  </dd>
                </div>
              </dl>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <form
              onSubmit={handleSubmit}
              className="rounded-xl2 border border-ink/12 bg-cream-2/50 p-8 sm:p-10"
            >
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
                    <option key={option} value={option}>
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

              <p className="mt-5 text-center text-[0.72rem] leading-relaxed text-ink/45">
                {contato.disclaimer}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
