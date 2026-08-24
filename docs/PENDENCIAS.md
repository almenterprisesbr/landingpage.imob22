# Pendências — o que falta para a página ir ao ar

Tudo abaixo está no site com valor **provisório**. Cada item aparece marcado com `// PENDENTE` em `src/data/site.ts`.

## 🔴 Bloqueiam a publicação

| # | Item | Onde entra |
|---|---|---|
| 1 | **Número do WhatsApp da Imob22** | `brand.whatsapp` — sem ele, nenhum botão da página funciona |
| 2 | **Fotos e renders do prédio** | `public/img/` — hoje o site usa reservas em degradê |
| 3 | **Endereço completo** (rua, bairro, cidade) | `localizacao.address` |
| 4 | **CRECI da imobiliária** | `brand.creci` — exigência legal |

## 🟡 Precisam de confirmação

| # | Item | Situação atual |
|---|---|---|
| 5 | Metragem das unidades | "A confirmar" |
| 6 | São **duas** plantas (Tipo A e Tipo B) ou só uma? | Duas modeladas |
| 7 | Número de vagas de garagem | Não está no site |
| 8 | Distância real até a praia | "100m" (chute) |
| 9 | Fase da obra e previsão de entrega | Não está no site |
| 10 | Telefone fixo, e-mail e endereço do stand | Provisórios |
| 11 | Depoimentos reais de clientes (com autorização) | Genéricos |
| 12 | Instagram da imobiliária | Link vazio |

## 🟢 Melhorias depois do ar

- Poster do vídeo (`public/img/gate-poster.jpg`) — evita o piscar preto no carregamento
- Imagem de compartilhamento para WhatsApp/Instagram (`og-skyglasses.jpg`, 1200×630)
- Google Analytics / Meta Pixel para medir os cliques no WhatsApp
- Mapa interativo no lugar da imagem estática
- Tour virtual 360º, se existir

## Fotos necessárias

**Do prédio**
- [ ] Fachada completa (dia e fim de tarde)
- [ ] Hall de entrada
- [ ] Vista da varanda / vista do mar

**Do decorado ou renders**
- [ ] Sala com cozinha americana
- [ ] Suíte
- [ ] Segundo quarto
- [ ] Closet
- [ ] Varanda

**Do lazer** — uma de cada
- [ ] Piscina adulto · [ ] Piscina e área kids · [ ] Cinema
- [ ] Salão de festas · [ ] Mercado · [ ] Área recreativa

**Plantas** — imagem ou PDF de cada tipologia

> Se alguma dessas imagens ainda não existir, dá para **gerar renders** para ocupar o lugar enquanto o material oficial não chega. Basta pedir. Renders gerados devem sair do ar assim que a foto real existir, e todo material ilustrativo já está coberto pelo aviso legal no rodapé.

## Nomes dos arquivos

Ao enviar as imagens, salve em `public/img/` com estes nomes exatos — o site já aponta para eles:

```
fachada-principal.jpg      gate-poster.jpg          og-skyglasses.jpg
planta-tipo-a.jpg          planta-tipo-b.jpg
lazer-piscina.jpg          lazer-cinema.jpg         lazer-salao-festas.jpg
lazer-kids.jpg             lazer-mercado.jpg        lazer-recreativa.jpg
localizacao-mapa.jpg
galeria-01.jpg ... galeria-06.jpg
```
