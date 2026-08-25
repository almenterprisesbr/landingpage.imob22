# Prompt para recriar no Lovable

Este repositório já usa a stack nativa do Lovable (Vite + React + TypeScript +
Tailwind), então há dois caminhos.

## Caminho 1 — importar o repositório (recomendado)

No Lovable: **New Project → Import from GitHub**. Depois de importar, envie:

> Este projeto já está completo. Não reescreva a estrutura. Todo o conteúdo fica
> em `src/data/site.ts` — altere apenas lá, a não ser que eu peça mudança de layout.

## Caminho 2 — recriar do zero

---

Crie uma landing page de alto padrão, em português do Brasil, para o **SKYGLASSES** —
uma torre residencial envidraçada **em construção** na Barra Sul, Balneário Camboriú,
comercializada pela **Sky Imobiliária**. Objetivo único: levar o visitante a chamar
a imobiliária no WhatsApp.

Stack: Vite + React + TypeScript + Tailwind + Framer Motion.

**Regra de arquitetura:** todo texto, telefone e caminho de imagem vive num único
`src/data/site.ts`, exportado por seção. Nenhum componente tem texto escrito dentro.

## Identidade

Paleta escura alternada com painéis creme:

- Fundo escuro `#0A0C0F`, superfícies `#111519` e `#1A1F26`
- Painel creme `#F2EFE7`, superfície interna `#E7E2D6`
- Ação `#C89B5A` (dourado) — sobre creme use `#9A7038` para contraste
- Texto secundário sobre escuro `#8C949F`

O site **alterna painel escuro e painel creme a cada seção**. Essa alternância é o
ritmo da página.

Fontes: **Inter Tight** (300–800) para display e interface, **Instrument Serif
Italic** só para palavras de destaque. A assinatura é que **todo título de seção
começa em sans e termina numa palavra em serifa itálica** — ex.: "Tudo o que você
precisa. *Nada pedindo nada de você.*". Títulos com `letter-spacing: -0.05em`.

Acabamento: ruído SVG a 5% em `mix-blend-mode: overlay` sobre as imagens, vinheta
radial nas bordas da introdução.

## A introdução (a parte mais importante)

Três estados, sem exigir clique:

1. **Rodando** — ao abrir a página o vídeo `/media/skyglasses-intro.mp4` toca
   sozinho, mudo, `playsInline`, em tela cheia com `object-cover`.

2. **Congelado** — no `onEnded`, pause o vídeo e prenda em
   `duration - 0.05`. **Proteja contra `duration` não finito**: se o vídeo falhar
   ao carregar, `duration` é `NaN` e atribuir `currentTime` lança exceção. Nesse
   caso apenas pause e deixe o poster à mostra. Então:
   - O wordmark abre a partir do centro: `SKY` à esquerda e `GLASSES` à direita,
     animando `x: ±45% → 0` com blur saindo, em 1,6 s. A torre do vídeo fica no
     corredor entre as duas metades — calibre o tamanho da fonte
     (`clamp(2.1rem, 7vw, 7.5rem)`) para que as palavras **não invadam** a torre.
   - Rótulos pequenos vão para as **bordas**, nunca ao centro: "Sky Imobiliária
     apresenta" no topo, "Barra Sul · Balneário Camboriú" no canto inferior
     esquerdo em dourado. Ponha degradês escuros no topo e no rodapé — sem eles o
     texto fino some sobre a fachada clara.

3. **Abertura** — 1,5 s depois, ou assim que a pessoa rolar / tocar / apertar uma
   tecla, um painel creme sobe do rodapé e toma a tela.
   **Anime `clip-path`, não `height`:** de
   `inset(100% 6vw 0% 6vw round 28px 28px 0px 0px)` para
   `inset(0% 0vw 0% 0vw round 0px)`, 1,5 s com `cubic-bezier(0.76, 0, 0.24, 1)`.
   Animar altura força layout a cada quadro; o recorte roda no compositor. E como
   o conteúdo por baixo não se mexe, ele é **descoberto de baixo para cima**.

Trave `body` enquanto a introdução estiver ativa. **O painel que sobe contém a
mesma primeira seção que abre a página** — mesmo fundo, mesmo layout — então a
troca ao final é invisível. Só monte o resto do site depois disso.

## Movimento

- Entradas em cena: `y: 30px → 0` + fade, 900 ms, `cubic-bezier(0.16, 1, 0.3, 1)`
- Títulos revelam **palavra a palavra** com máscara `overflow-hidden` e `y: 110% → 0`,
  escalonado 70 ms. **Coloque o `whileInView` no `<h2>`, nunca nas palavras** — cada
  palavra começa fora da caixa recortada do pai, e o IntersectionObserver leva o
  recorte do ancestral em conta: a razão de interseção seria sempre zero e o título
  nunca apareceria. O pai observa e dispara variantes escalonadas nos filhos.
- Paralaxe de 16% na imagem da seção da obra
- `scale(1.08)` em 1600 ms no hover das imagens
- Respeitar `prefers-reduced-motion`

## Seções (alternando escuro / creme)

1. **Nav** fixa, transparente no topo com texto escuro sobre o creme; ao rolar
   ganha fundo `ink/80` com blur, texto creme e CTA dourado.
2. **Abertura** *(creme)* — rótulo "Em construção" com ponto dourado pulsando,
   título, parágrafo e uma linha de quatro números separados por filetes:
   `02` Quartos · `01` Suíte com closet · `06` Áreas de lazer · `2028` Entrega.
3. **O Edifício** *(escuro)* — título à esquerda, parágrafos à direita deslocados;
   três pilares numerados `01/02/03` com uma régua dourada que cresce de 36 px até
   100% no hover; abaixo, mosaico de seis imagens onde duas ocupam largura dupla.
4. **A Planta** *(creme)* — imagem 4:5 à esquerda; à direita a lista de
   características como pares rótulo/detalhe separados por filetes, a metragem em
   serifa dourada ("Metragem sob consulta") e o CTA.
5. **Lazer** *(escuro)* — imagem em destaque **sticky** à esquerda enquanto a lista
   editorial rola ao lado: seis itens numerados, o nome desliza 6 px no hover. A
   seção não depende de foto de cada área.
6. **A Obra** *(creme)* — cronograma em quatro fases com o status em dourado /
   escuro / apagado conforme concluída, em andamento ou a iniciar; imagem com
   paralaxe ao lado.
7. **Localização** *(escuro)* — endereço e pontos de interesse com as distâncias em
   dourado, separados por filetes.
8. **Contato** *(creme)* — dados à esquerda; à direita um formulário que
   **não usa backend**: monta a mensagem e abre `wa.me` já preenchido.
9. **Rodapé** *(escuro)* — marca, CRECI, links, o wordmark gigante em `13vw` com
   7% de opacidade fechando a página, e o aviso de imagens ilustrativas.

Mais um **botão flutuante de WhatsApp** fixo no canto inferior direito.

## Conteúdo

- **Unidade:** 2 quartos sendo 1 suíte · closet · sala com cozinha americana · varanda
- **Lazer:** piscina · cinema · salão de festas · mercado · área recreativa · espaço kids
- **Status:** em construção, entrega prevista para 2028
- **Local:** Barra Sul, Balneário Camboriú/SC

Deixe endereço, telefone, CRECI e cronograma como provisórios marcados com `// PENDENTE`.

**Tom de voz:** sofisticado sem ser pomposo, frases curtas, tratamento por "você",
nada de jargão de corretagem. Como o prédio ainda não existe, o argumento é a
escolha — quem chega agora escolhe andar, vista e posição, e entra pelo valor de
lançamento.
