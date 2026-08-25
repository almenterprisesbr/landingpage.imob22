/**
 * FONTE ÚNICA DE CONTEÚDO DA LANDING PAGE
 * ---------------------------------------
 * Todo texto, número e caminho de imagem do site vive aqui.
 * Para atualizar o site, edite este arquivo — nenhum componente precisa ser tocado.
 *
 * Campos marcados com "// PENDENTE" usam valores provisórios. Ver docs/PENDENCIAS.md.
 */

export const brand = {
  building: "SKYGLASSES",
  company: "Sky Imobiliária",
  tagline: "Onde o céu encontra o mar",
  city: "Balneário Camboriú · SC",
  // PENDENTE: número real da imobiliária (formato internacional, só dígitos)
  whatsapp: "5547999999999",
  whatsappMessage:
    "Olá! Vi a página do SKYGLASSES e quero saber mais sobre os apartamentos.",
  // PENDENTE: dados reais de contato e CRECI
  phoneDisplay: "(47) 99999-9999",
  email: "contato@skyimobiliaria.com.br",
  creci: "CRECI/SC 00000-J",
  instagram: "https://instagram.com/",
} as const;

export const whatsappUrl = (message: string = brand.whatsappMessage) =>
  `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(message)}`;

/* ------------------------------------------------------------------ */
/* Navegação                                                           */
/* ------------------------------------------------------------------ */

export const navLinks = [
  { label: "O Edifício", href: "#edificio" },
  { label: "A Planta", href: "#planta" },
  { label: "Lazer", href: "#lazer" },
  { label: "A Obra", href: "#obra" },
  { label: "Localização", href: "#localizacao" },
  { label: "Contato", href: "#contato" },
] as const;

/* ------------------------------------------------------------------ */
/* Introdução — vídeo que roda sozinho e congela                       */
/* ------------------------------------------------------------------ */

export const intro = {
  video: "/media/skyglasses-intro.mp4",
  videoMobile: "/media/skyglasses-intro-mobile.mp4",
  poster: "/img/intro-poster.jpg",
  /** O wordmark abre em duas metades, flanqueando a torre. */
  markLeft: "SKY",
  markRight: "GLASSES",
  eyebrow: "Sky Imobiliária apresenta",
  location: "Barra Sul · Balneário Camboriú",
  hint: "Role para entrar",
} as const;

/* ------------------------------------------------------------------ */
/* Abertura do painel creme                                            */
/* ------------------------------------------------------------------ */

export const opening = {
  eyebrow: "Em construção",
  title: "Um endereço que",
  titleAccent: "ainda vai existir",
  description:
    "O SKYGLASSES está saindo do chão na quadra mais disputada da Barra Sul. Quem chega agora escolhe andar, vista e posição — e entra pelo valor de lançamento.",
  stats: [
    { value: "02", label: "Quartos" },
    { value: "01", label: "Suíte com closet" },
    { value: "06", label: "Áreas de lazer" },
    { value: "2028", label: "Entrega prevista" },
  ],
} as const;

/* ------------------------------------------------------------------ */
/* O edifício                                                          */
/* ------------------------------------------------------------------ */

export type Shot = { src: string; caption: string; span?: "wide" };

export const edificio = {
  eyebrow: "O Edifício",
  title: "Tudo o que você precisa.",
  titleAccent: "Nada pedindo nada de você.",
  paragraphs: [
    "Uma torre de vidro desenhada para a luz do fim de tarde. As varandas avançam sobre o mar, e a fachada devolve o horizonte para dentro de casa.",
    "Cada apartamento nasceu da mesma pergunta: o que sobra quando se tira o excesso? A resposta está na planta — circulação curta, ambientes integrados, armazenamento resolvido.",
  ],
  pillars: [
    {
      n: "01",
      title: "Fachada envidraçada",
      text: "Vidro do piso ao teto em toda a face voltada para o mar.",
    },
    {
      n: "02",
      title: "Varandas profundas",
      text: "Espaço real para mesa, espreguiçadeira e a vista aberta.",
    },
    {
      n: "03",
      title: "Rooftop coroado",
      text: "O último pavimento entrega o melhor ângulo da orla.",
    },
  ],
  gallery: [
    { src: "/img/torre-frontal.jpg", caption: "Fachada frontal ao entardecer", span: "wide" },
    { src: "/img/torre-entardecer.jpg", caption: "Volumetria e varandas" },
    { src: "/img/torre-aerea.jpg", caption: "Implantação e entorno" },
    { src: "/img/living-interior.jpg", caption: "Living integrado", span: "wide" },
    { src: "/img/living-vista-mar.jpg", caption: "Living com vista mar" },
    { src: "/img/varanda-suite.jpg", caption: "Varanda e vista" },
  ] satisfies Shot[],
} as const;

/* ------------------------------------------------------------------ */
/* A planta                                                            */
/* ------------------------------------------------------------------ */

export const planta = {
  eyebrow: "A Planta",
  title: "Dois quartos,",
  titleAccent: "nenhum desperdício",
  description:
    "Uma tipologia só, desenhada até o fim. Sem metro quadrado sobrando em corredor, sem cômodo que ninguém usa.",
  // PENDENTE: metragem e vagas — hoje tratadas como "sob consulta" de propósito,
  // porque é o que leva o visitante a abrir conversa com o corretor.
  areaLabel: "Metragem sob consulta",
  image: "/img/living-interior.jpg",
  features: [
    { label: "2 quartos", detail: "sendo 1 suíte" },
    { label: "Closet", detail: "integrado à suíte" },
    { label: "Sala ampla", detail: "com cozinha americana" },
    { label: "Varanda", detail: "voltada para o mar" },
  ],
  cta: "Ver a planta completa",
} as const;

/* ------------------------------------------------------------------ */
/* Lazer                                                               */
/* ------------------------------------------------------------------ */

export const lazer = {
  eyebrow: "Lazer",
  title: "O condomínio",
  titleAccent: "resolve o seu dia",
  description:
    "Do café da manhã ao cinema da noite, tudo acontece a poucos passos da sua porta.",
  featured: { src: "/img/piscina-deck.jpg", caption: "Deck e piscina" },
  items: [
    { n: "01", name: "Piscina", text: "Lâmina d'água com deck solarium e vista aberta." },
    { n: "02", name: "Cinema", text: "Sala privativa com projeção e poltronas reclináveis." },
    { n: "03", name: "Salão de festas", text: "Ambiente equipado para receber sem sair de casa." },
    { n: "04", name: "Mercado", text: "Mercado autônomo 24h dentro do condomínio." },
    { n: "05", name: "Área recreativa", text: "Convivência ao ar livre para esporte e descanso." },
    { n: "06", name: "Espaço kids", text: "Piscina infantil e brinquedoteca em área supervisionável." },
  ],
} as const;

/* ------------------------------------------------------------------ */
/* A obra                                                              */
/* ------------------------------------------------------------------ */

export const obra = {
  eyebrow: "A Obra",
  title: "Acompanhe de perto",
  titleAccent: "cada laje",
  description:
    "O SKYGLASSES está em construção. Comprar agora significa escolher a melhor unidade e entrar pelo valor de lançamento — antes da valorização de entrega.",
  image: "/img/torre-aerea.jpg",
  // PENDENTE: percentuais e datas reais do cronograma da obra
  phases: [
    { label: "Fundação", status: "Concluída" },
    { label: "Estrutura", status: "Em andamento" },
    { label: "Alvenaria e instalações", status: "A iniciar" },
    { label: "Acabamento e entrega", status: "Previsto para 2028" },
  ],
  cta: "Quero o book completo da obra",
} as const;

/* ------------------------------------------------------------------ */
/* Localização                                                         */
/* ------------------------------------------------------------------ */

export const localizacao = {
  eyebrow: "Localização",
  title: "Barra Sul,",
  titleAccent: "Balneário Camboriú",
  // PENDENTE: endereço real do empreendimento — este é fictício, a pedido do cliente
  address: "Av. Atlântica, 2.800 — Barra Sul, Balneário Camboriú/SC",
  description:
    "A quadra mais valorizada da cidade: a orla de um lado, a estrutura completa do centro do outro.",
  image: "/img/fachada-rua.jpg",
  mapsUrl: "https://www.google.com/maps/place/Balne%C3%A1rio+Cambori%C3%BA,+SC",
  // PENDENTE: distâncias reais após confirmação do endereço
  pois: [
    { label: "Praia Central", distance: "120 m" },
    { label: "Barra Sul e Molhe", distance: "700 m" },
    { label: "Av. Brasil", distance: "900 m" },
    { label: "Balneário Shopping", distance: "2,4 km" },
    { label: "Parque Unipraias", distance: "1,6 km" },
  ],
} as const;

/* ------------------------------------------------------------------ */
/* Contato                                                             */
/* ------------------------------------------------------------------ */

export const contato = {
  eyebrow: "Fale com a gente",
  title: "Vamos escolher",
  titleAccent: "a sua unidade",
  description:
    "As melhores posições saem primeiro. Chame no WhatsApp e um corretor da Sky Imobiliária apresenta as unidades disponíveis, os valores de lançamento e as condições de pagamento.",
  whatsappCta: "Chamar no WhatsApp",
  formCta: "Quero ser contatado",
  interesses: [
    "Quero ver as unidades disponíveis",
    "Quero saber valores e condições",
    "Quero visitar o stand de vendas",
    "Estou avaliando como investimento",
  ],
  disclaimer:
    "Ao enviar, você concorda em ser contatado pela Sky Imobiliária sobre este empreendimento.",
} as const;

/* ------------------------------------------------------------------ */
/* Rodapé                                                              */
/* ------------------------------------------------------------------ */

export const footer = {
  legal:
    "Imagens meramente ilustrativas. Empreendimento em construção. Medidas, acabamentos e áreas de lazer sujeitos a alteração conforme memorial descritivo e projeto aprovado pelos órgãos competentes.",
} as const;
