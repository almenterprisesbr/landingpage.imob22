# SKYGLASSES — Landing Page

Landing page imersiva do empreendimento **SKYGLASSES**, comercializado pela **Imob22**.
Objetivo único da página: fazer o visitante **chamar a imobiliária no WhatsApp**.

## A experiência

1. **Portal de vídeo** — a página abre com o vídeo do empreendimento rodando mudo, desfocado, em loop. A tela inteira é clicável.
2. **Um clique em qualquer lugar** reinicia o vídeo com som, em tela cheia, com barra de progresso e opção de pular.
3. **Ao terminar (ou pular)**, a cortina se abre, a rolagem é liberada e o site entra em cena — cada seção com sua própria animação de entrada.

A rolagem fica travada até o portal se abrir, garantindo que ninguém pule a introdução por acidente.

## Stack

Vite · React 18 · TypeScript · Tailwind CSS · Framer Motion

Escolhida deliberadamente por ser **a mesma stack nativa do Lovable** — o código migra praticamente 1:1.

## Rodando localmente

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # gera dist/
```

## Onde mexer

| O que | Onde |
|---|---|
| **Todo o texto, telefone e caminho das imagens** | `src/data/site.ts` |
| Cores, fontes, animações | `tailwind.config.ts` + `src/index.css` |
| Vídeo de abertura | `public/media/skyglasses-intro.mp4` |
| Fotos e renders | `public/img/` |
| Seções da página | `src/components/` |

> Para atualizar o conteúdo do site você só precisa editar **`src/data/site.ts`**. Nenhum componente precisa ser tocado.

## Documentação

- [`docs/BRIEFING.md`](docs/BRIEFING.md) — o empreendimento, o público, a estratégia da página
- [`docs/DESIGN-SYSTEM.md`](docs/DESIGN-SYSTEM.md) — cores, tipografia, movimento
- [`docs/PENDENCIAS.md`](docs/PENDENCIAS.md) — **o que ainda falta o cliente enviar**
- [`docs/PROMPT-LOVABLE.md`](docs/PROMPT-LOVABLE.md) — prompt pronto para recriar o site no Lovable
- [`docs/referencias-visuais.pdf`](docs/referencias-visuais.pdf) — referências enviadas pelo cliente
