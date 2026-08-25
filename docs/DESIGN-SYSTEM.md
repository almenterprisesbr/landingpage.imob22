# Design System — SKYGLASSES

## A síntese

Três referências entraram no projeto:

**NORTH** (vídeo de referência do cliente) — deu a **estrutura**: hero escuro com
wordmark gigante sobre a imagem, painéis creme que sobem e tomam a tela, listas
editoriais com numeração, mistura de sans neutra com serifa itálica, linhas de
números como âncora de seção.

**O vídeo do empreendimento** — deu a **paleta**. O dourado do site é a luz do fim
de tarde nos renders; o azul quase preto é o céu logo acima dela.

**A referência creme/verde inicial** — deu o **respiro**: espaçamento generoso e
serifa itálica nas palavras de destaque.

O que a NORTH usa como acento — um verde-limão ácido — foi descartado de
propósito: sobre renders arquitetônicos quentes ele briga com a imagem. O dourado
faz o mesmo trabalho estrutural e pertence à fotografia.

## Cores

| Token | Hex | Uso |
|---|---|---|
| `ink` | `#0A0C0F` | Fundo escuro — azul de meia-noite, nunca preto puro |
| `ink-2` | `#111519` | Superfícies elevadas |
| `ink-3` | `#1A1F26` | Cartões, reservas de imagem |
| `cream` | `#F2EFE7` | **O painel.** Fundo das seções claras e texto sobre escuro |
| `cream-2` | `#E7E2D6` | Formulário, superfícies dentro do creme |
| `gold` | `#C89B5A` | Cor de ação e destaque |
| `gold-deep` | `#9A7038` | Destaque sobre fundo creme (contraste) |
| `mist` | `#8C949F` | Texto secundário sobre escuro |

O site alterna painéis escuros e cremes seção a seção. Essa alternância é o ritmo
da página — cada troca marca um novo assunto.

## Tipografia

**Inter Tight** (300–800) — display e interface. Neo-grotesk neutra, próxima da
referência NORTH.
**Instrument Serif Italic** — apenas as palavras de destaque nos títulos.

A assinatura: **todo título de seção começa em sans e termina em serifa itálica.**
"Tudo o que você precisa. *Nada pedindo nada de você.*"

| Classe | Tamanho | Onde |
|---|---|---|
| `.h-hero` | `clamp(2.1rem, 7vw, 7.5rem)` | Wordmark da introdução |
| `.h-section` | `clamp(2.1rem, 5vw, 4.4rem)` | Títulos de seção |
| `.h-sub` | `clamp(1.5rem, 2.6vw, 2.3rem)` | Itens da lista de lazer |
| `.eyebrow` | `0.63rem`, caixa alta, `0.24em` | Rótulo acima do título |

O `h-hero` é calibrado para que `SKY` e `GLASSES` caibam nas laterais **sem
invadir a torre** no quadro congelado. Mexer nesse tamanho quebra a composição.

## Movimento

Duas curvas, cada uma com um papel:

- `cubic-bezier(0.16, 1, 0.3, 1)` — entradas em cena. Sai rápido, assenta devagar.
- `cubic-bezier(0.76, 0, 0.24, 1)` — o painel que sobe. Simétrica, com peso.

| Padrão | Especificação |
|---|---|
| Entrada em cena | `y: 30px → 0` + fade, 900 ms |
| Título palavra a palavra | máscara `overflow-hidden`, `y: 110% → 0`, escalonado 70 ms |
| Wordmark | duas metades abrem do centro, `x: ±45% → 0`, 1,6 s |
| Painel da introdução | `clip-path` de baixo para cima, 1,5 s |
| Paralaxe (A Obra) | imagem desloca 16% contra a rolagem |
| Zoom em imagem | `scale(1.08)` em 1600 ms no hover |

`prefers-reduced-motion` desliga tudo e pula o vídeo direto para o quadro final.

### Duas armadilhas que o código evita

**O painel usa `clip-path`, não `height`.** Animar altura força layout a cada
quadro e engasga; o recorte roda no compositor. E como o conteúdo por baixo não se
mexe, ele é *descoberto* de baixo para cima em vez de ser empurrado.

**A detecção de entrada em cena fica no `<h2>`, nunca nas palavras.** Cada palavra
começa deslocada para fora da caixa com `overflow-hidden` do pai. O
IntersectionObserver leva o recorte do ancestral em conta, então a razão de
interseção de uma palavra é **sempre zero** — o título nunca apareceria. O pai
observa, e as palavras seguem por variante escalonada.

## Textura

- **`.grain`** — ruído SVG a 5% em `mix-blend-mode: overlay`. Tira o aspecto chapado.
- **`.vignette`** — escurecimento radial nas bordas.
- **Véus** — degradês no topo e no rodapé da introdução. Sem eles, os rótulos
  pequenos somem sobre a fachada clara da torre.

## Acessibilidade

- `cream` sobre `ink` ≈ 16:1 · `gold` sobre `ink` ≈ 7:1 · `gold-deep` sobre `cream` ≈ 4.8:1
- A introdução é operável por teclado (Enter/Espaço/setas avançam)
- Autoplay bloqueado ou vídeo que falha ao carregar caem para o poster, sem travar
- Todo campo de formulário tem `aria-label`
