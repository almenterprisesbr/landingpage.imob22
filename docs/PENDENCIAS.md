# Pendências — o que falta para a página ir ao ar

Cada item aparece marcado com `// PENDENTE` em `src/data/site.ts`.

## 🔴 Bloqueiam a publicação

| # | Item | Onde entra |
|---|---|---|
| 1 | **Número do WhatsApp da Sky Imobiliária** | `brand.whatsapp` — sem ele nenhum botão da página funciona |
| 2 | **Endereço real do empreendimento** | `localizacao.address` — hoje há um endereço **fictício** na Av. Atlântica, a pedido do cliente |
| 3 | **CRECI da imobiliária** | `brand.creci` — exigência legal |
| 4 | **Telefone e e-mail reais** | `brand.phoneDisplay`, `brand.email` |

## 🟡 Dados provisórios em uso

Estes valores estão no ar como **estimativa**, não como informação confirmada.
Precisam ser trocados pelos números do memorial antes de qualquer campanha paga.

| # | Item | Valor atual |
|---|---|---|
| 5 | Cronograma da obra | Fundação concluída · Estrutura em andamento · Entrega 2028 |
| 6 | Distâncias até os pontos de interesse | Calculadas sobre o endereço fictício |
| 7 | Número de áreas de lazer | 06 |
| 8 | Vagas de garagem | Não aparece no site |

**Metragem** está como *"sob consulta"* de propósito — é informação que o corretor
usa para abrir conversa, e evita publicar número que ainda não foi confirmado.

## 🟢 Melhorias

- Planta baixa da tipologia (imagem ou PDF) — hoje a seção usa uma foto do living
- Fotos reais do canteiro de obras para a seção **A Obra**
- Imagem de compartilhamento `og-skyglasses.jpg` (1200×630)
- Depoimentos de clientes reais, com autorização de uso
- Google Analytics / Meta Pixel para medir os cliques no WhatsApp

## Imagens

As nove imagens do site foram extraídas do vídeo oficial do empreendimento —
são renders do próprio projeto. Ver `public/img/LEIA-ME.md` para a lista completa
e `./scripts/extrair-frames.sh` para regerá-las.

Ainda faltam: **planta baixa** e **fotos de obra**.
