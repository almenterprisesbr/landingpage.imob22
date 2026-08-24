# Pendências — o que falta para a página ir ao ar

Tudo abaixo está no site com valor **provisório**. Cada item aparece marcado com `// PENDENTE` em `src/data/site.ts`.

## 🔴 Bloqueiam a publicação

| # | Item | Onde entra |
|---|---|---|
| 1 | **Número do WhatsApp da SKYHOUSES IMÓVEIS** | `brand.whatsapp` — sem ele, nenhum botão da página funciona |
| 2 | **Fotos e renders do prédio** | `public/img/` — hoje o site usa reservas em degradê |
| 3 | **Endereço completo** (rua, bairro, cidade) | `localizacao.address` |
| 4 | **CRECI da imobiliária** | `brand.creci` — exigência legal |

## 🟡 Precisam de confirmação

| # | Item | Situação atual |
|---|---|---|
| 5 | Metragem da unidade | "A confirmar" |
| 6 | Existe mais de uma tipologia? | Modelada **uma só**: 2 quartos com suíte |
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
- [x] ~~Fachada completa~~ — **dois renders enviados no chat, mas não chegaram como arquivo.** Reenviar como anexo `.jpg` para entrarem no repositório.
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

**Planta** — imagem ou PDF da tipologia de 2 quartos com suíte

> **Geração por IA — indisponível no momento.** A conta Higgsfield ligada a esta sessão está no plano gratuito, com **10 créditos** e sem cota de gerações ilimitadas. Não dá para gerar as ~10 imagens necessárias. Para destravar: adicionar créditos na conta, ou enviar as fotos/renders reais. Se renders gerados forem usados, devem sair do ar assim que a foto real existir — o aviso legal do rodapé já cobre material ilustrativo.

## Nomes dos arquivos

Ao enviar as imagens, salve em `public/img/` com estes nomes exatos — o site já aponta para eles:

```
fachada-principal.jpg      gate-poster.jpg          og-skyglasses.jpg
planta-tipo-a.jpg
lazer-piscina.jpg          lazer-cinema.jpg         lazer-salao-festas.jpg
lazer-kids.jpg             lazer-mercado.jpg        lazer-recreativa.jpg
localizacao-mapa.jpg
galeria-01.jpg ... galeria-06.jpg
```
