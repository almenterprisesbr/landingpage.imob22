# Prompt para recriar no Lovable

O código deste repositório já usa a stack nativa do Lovable (Vite + React + TypeScript + Tailwind), então há dois caminhos.

---

## Caminho 1 — importar o repositório (recomendado)

No Lovable: **New Project → Import from GitHub** e aponte para este repositório. O projeto sobe praticamente pronto.

Depois de importar, envie ao Lovable:

> Este projeto já está completo. Não reescreva a estrutura. Todo o conteúdo do site fica em `src/data/site.ts` — faça alterações apenas lá, a não ser que eu peça mudança de layout.

---

## Caminho 2 — recriar do zero

Cole o prompt abaixo em um projeto novo do Lovable.

---

Crie uma landing page de alto padrão, em português do Brasil, para o empreendimento imobiliário **SKYGLASSES** — uma torre residencial envidraçada à beira-mar, comercializada pela imobiliária **Imob22**. O objetivo único da página é levar o visitante a chamar a imobiliária no WhatsApp.

Stack: Vite + React + TypeScript + Tailwind CSS + Framer Motion.

**Regra de arquitetura:** todo texto, número de telefone e caminho de imagem deve viver num único arquivo `src/data/site.ts`, exportado por seção. Nenhum componente pode ter texto escrito direto nele.

## Identidade visual

Paleta escura e cinematográfica, extraída de um render do prédio ao pôr do sol:

- Fundo `#070B12` (azul de meia-noite, nunca preto puro)
- Seções alternadas `#0C1220`
- Cor de ação `#E3A857` (dourado de pôr do sol) — hover `#F0BE7B`
- Texto `#EDE6DA` (creme) · secundário `#9AA3B2`

Duas fontes do Google Fonts:
- **Sora** (300–800) para display e interface
- **Instrument Serif Italic** apenas para palavras de destaque

A assinatura visual: **todo título de seção começa em Sora e termina numa palavra em Instrument Serif itálico dourado.** Exemplo: "Mais que *quatro paredes*". Títulos com `letter-spacing: -0.055em`.

Acabamento: textura de grão em ruído SVG a 5% em `mix-blend-mode: overlay` sobre as áreas de imagem, vinheta radial nas bordas, e cartões de vidro (`backdrop-blur(18px)` com borda clara de 1px).

## A abertura imersiva (a parte mais importante)

Um portal em tela cheia com três estados:

1. **Aguardando** — o vídeo `/media/skyglasses-intro.mp4` roda mudo, em loop, com `blur(10px)` e `brightness(0.5)`. Por cima: o rótulo "Imob22 apresenta", o título **SKYGLASSES** entrando com o letter-spacing animando de `0.18em` para `-0.055em` ao longo de 1,7s, o subtítulo em serifa itálica dourada, e um botão circular de play com dois anéis pulsando em defasagem, sob o texto "Toque em qualquer lugar para começar". **A tela inteira é clicável.**

2. **Reproduzindo** — ao clicar em qualquer ponto: o vídeo volta ao início, ganha som, e o blur e o escurecimento saem em 1,5s. Toda a interface de convite sai com fade + blur. Aparecem uma barra de progresso fina dourada e um botão discreto "Pular introdução". Se o navegador bloquear o áudio, volte para mudo em vez de travar a entrada.

3. **Concluído** — ao terminar o vídeo ou ao pular: o portal sai com `scale(1.08)` + `blur(14px)` + fade em 900ms, a rolagem é liberada e o site é montado com fade.

Trave a rolagem do `body` enquanto o portal estiver ativo. Enter e Espaço abrem o portal; Esc pula. Só monte o restante do site **depois** que o portal se abrir — assim a animação de entrada de cada seção acontece com o usuário olhando.

## Movimento

Uma única curva no site inteiro: `cubic-bezier(0.16, 1, 0.3, 1)`.

- Entrada em cena: `y: 34px → 0` + fade, 900ms, escalonado 80ms entre irmãos
- Títulos revelam **palavra a palavra** com máscara `overflow-hidden` e `y: 108% → 0`, escalonado 75ms
- Hero com paralaxe: imagem de fundo desce 22%, o texto sobe 14% na rolagem
- Imagens dão `scale(1.10)` em 1400ms no hover
- Números contam de 0 ao valor em 1600ms ao entrar em cena
- Faixa de destaques em movimento contínuo, 42s lineares
- Respeitar `prefers-reduced-motion`

## Seções

1. **Nav** fixa, transparente, que ganha fundo desfocado e borda inferior após 40px de rolagem. Menu mobile em acordeão.

2. **Hero** — rótulo, título gigante em três linhas com a última em serifa itálica dourada ("Viver alto / é viver / *leve*"), parágrafo, dois botões, e três números com contador (2 quartos com suíte · 8+ áreas de lazer · 100m do mar). Indicador de rolagem animado embaixo.

3. **Manifesto** — grade de 12 colunas: título à esquerda (5 col), parágrafos à direita (7 col, deslocados 4rem para baixo). Abaixo, três pilares numerados 01/02/03 em cartões separados por linhas de 1px, cada um com uma régua dourada que cresce de 40px até 100% da largura no hover.

4. **Plantas** — botões de alternância entre tipologias. O painel ativo mostra imagem à esquerda, detalhes à direita: selo, nome, metragem em serifa dourada, lista de características com traços dourados, e o botão "Quero esta planta" que abre o WhatsApp **já dizendo qual planta**. Abaixo, a faixa contínua de destaques.

5. **Lazer** — mosaico irregular de 3 colunas com seis áreas (piscina adulto, cinema, salão de festas, piscina e área kids, mercado, área recreativa). "Piscina" e "área recreativa" ocupam largura dupla; "área kids" ocupa altura dupla. A descrição de cada área só aparece no hover; o nome fica sempre visível sobre um degradê que sobe do fundo.

6. **Galeria** — grade de 3 colunas em proporção 4:5, com lightbox que fecha com Esc ou clique fora.

7. **Localização** — endereço e lista de pontos de interesse com as distâncias em dourado, separados por linhas de 1px; imagem do mapa em 4:5 ao lado.

8. **Depoimentos** — três cartões de vidro com aspas em serifa dourada.

9. **Contato** — brilho dourado radial desfocado ao fundo. À esquerda os dados de contato; à direita um formulário de vidro (nome, WhatsApp, interesse, mensagem) que **não usa backend**: monta a mensagem e abre `wa.me` já preenchido.

10. **Rodapé** — marca, CRECI, links, régua dourada em degradê e o aviso "Imagens meramente ilustrativas".

Mais um **botão flutuante de WhatsApp** fixo no canto inferior direito, sempre visível.

## Conteúdo do empreendimento

- **Unidades:** 2 quartos sendo suíte · sala integrada com cozinha americana · 1 closet · varanda
- **Lazer:** piscina adulto · piscina e área kids · cinema · salão de festas · mercado · área recreativa

Deixe metragens, endereço, telefone e CRECI como valores provisórios marcados com comentário `// PENDENTE`.

**Tom de voz:** sofisticado sem ser pomposo, frases curtas, tratamento por "você", nada de jargão de corretagem. A página vende a sensação de morar ali, não o metro quadrado.
