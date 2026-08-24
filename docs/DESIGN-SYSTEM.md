# Design System — SKYGLASSES

## Cores

| Token | Hex | Uso |
|---|---|---|
| `ink` | `#070B12` | Fundo principal — azul de meia-noite, não preto puro |
| `ink-2` | `#0C1220` | Seções alternadas, cria o ritmo da página |
| `ink-3` | `#131B2B` | Cartões, reservas de imagem |
| `gold` | `#E3A857` | **Cor de ação.** Botões, destaques, serifa itálica |
| `gold-soft` | `#F0BE7B` | Hover |
| `sand` | `#EDE6DA` | Texto principal — creme, herdado da Referência A |
| `mist` | `#9AA3B2` | Texto secundário |
| `sky` | `#7FA8C9` | Reservado para reflexo de vidro |

O dourado é **exclusivo da ação e do destaque**. Nunca é decoração — se está dourado, é porque merece o olhar.

## Tipografia

**Sora** — display e interface (300–800)
**Instrument Serif Italic** — apenas palavras de destaque nos títulos

O contraste entre as duas é a assinatura visual do site: a sans carrega a estrutura, a serifa carrega a emoção. Toda seção tem um título onde a segunda metade vira serifa dourada.

| Classe | Tamanho | Onde |
|---|---|---|
| `.h-display` | `clamp(2.6rem, 7.2vw, 6.5rem)` | Hero |
| `.h-section` | `clamp(2rem, 4.6vw, 3.9rem)` | Títulos de seção |
| `.eyebrow` | `0.66rem`, caixa alta, `0.28em` | Rótulo acima do título |
| `.lead` | `clamp(0.98rem, 1.15vw, 1.12rem)` | Parágrafos |

Títulos usam `letter-spacing: -0.055em`. Em tamanho grande, o espaçamento negativo é o que separa tipografia amadora de tipografia editorial.

## Movimento

Curva única em todo o site: `cubic-bezier(0.16, 1, 0.3, 1)` — sai rápido, assenta devagar.

| Padrão | Especificação |
|---|---|
| Entrada em cena | `y: 34px → 0`, `opacity: 0 → 1`, 900ms |
| Título palavra a palavra | máscara `overflow-hidden`, `y: 108% → 0`, escalonado 75ms |
| Paralaxe do hero | imagem +22%, texto −14% |
| Zoom em imagem | `scale(1.10)` em 1400ms no hover |
| Contadores | 0 → valor em 1600ms ao entrar em cena |
| Faixa contínua | 42s lineares, infinita |

`prefers-reduced-motion` desliga tudo — está tratado no `index.css`.

## Textura

Duas camadas dão o acabamento cinematográfico:

- **`.grain`** — ruído SVG a 5,5% de opacidade em `mix-blend-mode: overlay`. Tira o aspecto "chapado" do digital.
- **`.vignette`** — escurecimento radial nas bordas. Empurra o olho para o centro.

## Vidro

```css
background: linear-gradient(145deg, rgba(237,230,218,.07), rgba(237,230,218,.02));
border: 1px solid rgba(237,230,218,.12);
backdrop-filter: blur(18px) saturate(140%);
```

A borda clara de 1px é o que faz o vidro parecer vidro. Sem ela, vira um retângulo cinza.

## Grade

Container de 1400px, respiro lateral de 1,5rem. Seções respiram `py-28` no mobile e `py-40` no desktop — **o espaço vazio é o que comunica alto padrão**.

O mosaico do lazer quebra a grade de propósito: dois itens ocupam largura dupla, um ocupa altura dupla. Uma grade regular de seis cards pareceria um catálogo.

## Acessibilidade

- Contraste: `sand` sobre `ink` ≈ 15:1 · `gold` sobre `ink` ≈ 9:1
- Portal de vídeo operável por teclado (Enter/Espaço abre, Esc pula)
- Lightbox fecha com Esc, com foco tratado
- Todo campo de formulário tem `aria-label`
- Áudio bloqueado pelo navegador não trava a entrada — cai para mudo
