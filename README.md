# SKYGLASSES — Landing Page

Landing page imersiva do **SKYGLASSES**, residencial em construção na Barra Sul,
Balneário Camboriú, comercializado pela **Sky Imobiliária**.

Objetivo único: fazer o visitante **chamar a imobiliária no WhatsApp**.

## A experiência de entrada

1. **O vídeo roda sozinho.** Ao abrir a página, o tour do empreendimento toca em tela cheia, mudo, sem pedir clique.
2. **Congela no último quadro.** O vídeo para na tomada frontal da torre e o wordmark abre a partir do centro: `SKY` à esquerda, `GLASSES` à direita, com a torre no corredor entre eles.
3. **Um painel creme sobe e toma a tela.** Depois de uma batida de 1,5 s — ou assim que a pessoa rola, toca ou aperta uma tecla — um painel de cantos arredondados sobe do rodapé, se alarga até as bordas e descobre o conteúdo de baixo para cima.

A rolagem fica travada até o painel terminar de subir. O painel e a primeira seção
da página têm o mesmo fundo e o mesmo layout, então a troca no fim é invisível.

O corte do vídeo é proposital: o original termina com um letreiro "SKY HOUSE" em
9,85 s, e o site corta em 9,8 s para montar o nome correto em HTML.

## Stack

Vite · React 18 · TypeScript · Tailwind CSS · Framer Motion

A mesma stack nativa do Lovable — o código migra praticamente 1:1.

## Rodando localmente

```bash
npm install
npm run dev      # http://localhost:5173
npm run build
```

## Onde mexer

| O que | Onde |
|---|---|
| **Todo texto, telefone e caminho de imagem** | `src/data/site.ts` |
| Cores, fontes, animações | `tailwind.config.ts` + `src/index.css` |
| A introdução (vídeo, congelamento, painel) | `src/components/Intro.tsx` |
| Vídeos | `public/media/` |
| Renders | `public/img/` |
| Regerar renders a partir do vídeo | `./scripts/extrair-frames.sh <video.mp4>` |

> Para atualizar o conteúdo, edite **só** `src/data/site.ts`.

## Documentação

- [`docs/BRIEFING.md`](docs/BRIEFING.md) — empreendimento, público, estratégia
- [`docs/DESIGN-SYSTEM.md`](docs/DESIGN-SYSTEM.md) — cores, tipografia, movimento
- [`docs/PENDENCIAS.md`](docs/PENDENCIAS.md) — **o que falta o cliente enviar**
- [`docs/PROMPT-LOVABLE.md`](docs/PROMPT-LOVABLE.md) — prompt pronto para o Lovable
