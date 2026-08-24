/**
 * FONTE ÚNICA DE CONTEÚDO DA LANDING PAGE
 * ---------------------------------------
 * Todo texto, número e caminho de imagem do site vive aqui.
 * Para atualizar o site, edite este arquivo — nenhum componente precisa ser tocado.
 *
 * Os campos marcados com "// PENDENTE" usam valores provisórios
 * até o cliente confirmar. Veja docs/PENDENCIAS.md.
 */

export const brand = {
  name: "SKYGLASSES",
  tagline: "Onde o céu encontra o mar",
  imobiliaria: "Imob22",
  // PENDENTE: número real da imobiliária (formato internacional, só dígitos)
  whatsapp: "5511999999999",
  whatsappMessage:
    "Olá! Vi a página do SKYGLASSES e quero saber mais sobre os apartamentos.",
  // PENDENTE: telefone, e-mail, endereço do stand e CRECI
  phoneDisplay: "(11) 99999-9999",
  email: "contato@imob22.com.br",
  standAddress: "Stand de vendas — endereço a confirmar",
  creci: "CRECI 000000-J",
  instagram: "https://instagram.com/",
} as const;

export const whatsappUrl = (message: string = brand.whatsappMessage) =>
  `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(message)}`;

/* ------------------------------------------------------------------ */
/* Navegação                                                           */
/* ------------------------------------------------------------------ */

export const navLinks = [
  { label: "O Empreendimento", href: "#empreendimento" },
  { label: "Plantas", href: "#plantas" },
  { label: "Lazer", href: "#lazer" },
  { label: "Galeria", href: "#galeria" },
  { label: "Localização", href: "#localizacao" },
  { label: "Contato", href: "#contato" },
] as const;

/* ------------------------------------------------------------------ */
/* Portal de entrada (vídeo imersivo)                                  */
/* ------------------------------------------------------------------ */

export const gate = {
  videoSrc: "/media/skyglasses-intro.mp4",
  // PENDENTE: poster = 1º frame do vídeo, evita tela preta no carregamento
  poster: "/img/gate-poster.jpg",
  eyebrow: "Imob22 apresenta",
  title: "SKYGLASSES",
  subtitle: "Uma experiência à beira-mar",
  cta: "Toque em qualquer lugar para começar",
  skip: "Pular introdução",
} as const;

/* ------------------------------------------------------------------ */
/* Hero (revelado após o vídeo)                                        */
/* ------------------------------------------------------------------ */

export const hero = {
  eyebrow: "Alto padrão à beira-mar",
  titleLines: ["Viver alto", "é viver"],
  titleAccent: "leve",
  description:
    "Apartamentos de 2 quartos com suíte, sala com cozinha americana e closet. Um edifício de vidro desenhado para emoldurar o mar em cada amanhecer.",
  primaryCta: "Falar com um corretor",
  secondaryCta: "Conhecer o empreendimento",
  // PENDENTE: foto/render principal do prédio
  image: "/img/fachada-principal.jpg",
  stats: [
    { value: 2, suffix: "", label: "Quartos com suíte" },
    { value: 8, suffix: "+", label: "Áreas de lazer" },
    { value: 100, suffix: "m", label: "Do mar" }, // PENDENTE: distância real
  ],
} as const;

/* ------------------------------------------------------------------ */
/* Manifesto                                                           */
/* ------------------------------------------------------------------ */

export const manifesto = {
  eyebrow: "O Empreendimento",
  title: "Mais que",
  titleAccent: "quatro paredes",
  paragraphs: [
    "O SKYGLASSES nasceu de uma pergunta simples: e se a casa fosse tão generosa quanto a vista? Cada planta foi desenhada de dentro para fora — do closet que organiza a rotina à cozinha americana que integra a sala e transforma o jantar em encontro.",
    "Vidro, luz e mar. Uma arquitetura que não compete com a paisagem: ela se abre para ela.",
  ],
  pillars: [
    {
      title: "Arquitetura de vidro",
      text: "Fachada envidraçada que amplia a entrada de luz natural e devolve o mar para dentro de casa.",
    },
    {
      title: "Plantas inteligentes",
      text: "Cada metro pensado para o uso real: circulação limpa, espaços integrados e armazenamento resolvido.",
    },
    {
      title: "Lazer completo",
      text: "Cinema, piscinas, salão de festas e mercado. A rotina inteira resolvida dentro do condomínio.",
    },
  ],
} as const;

/* ------------------------------------------------------------------ */
/* Plantas / Unidades                                                  */
/* ------------------------------------------------------------------ */

export const unidades = {
  eyebrow: "Plantas",
  title: "Encontre a sua",
  titleAccent: "planta ideal",
  description:
    "Unidades entregues com acabamento de alto padrão e possibilidade de personalização de interiores.",
  // PENDENTE: metragens, número de vagas e valores reais de tabela
  items: [
    {
      id: "tipo-a",
      name: "Tipo A — 2 quartos com suíte",
      area: "A confirmar",
      badge: "Mais procurada",
      image: "/img/planta-tipo-a.jpg",
      features: [
        "2 quartos, sendo 1 suíte",
        "Closet",
        "Sala integrada com cozinha americana",
        "Varanda com vista",
      ],
    },
    {
      id: "tipo-b",
      name: "Tipo B — 2 suítes",
      area: "A confirmar",
      badge: "Alto padrão",
      image: "/img/planta-tipo-b.jpg",
      features: [
        "2 quartos, ambos suítes",
        "Closet",
        "Sala ampliada com cozinha americana",
        "Varanda gourmet",
      ],
    },
  ],
  highlights: [
    "Cozinha americana",
    "Closet",
    "Suíte",
    "Varanda",
    "Vista mar",
    "Interiores personalizáveis",
  ],
} as const;

/* ------------------------------------------------------------------ */
/* Lazer                                                               */
/* ------------------------------------------------------------------ */

export type Amenity = {
  id: string;
  name: string;
  description: string;
  image: string;
  icon: string;
  span?: "wide" | "tall";
};

export const lazer = {
  eyebrow: "Área de Lazer",
  title: "Um condomínio que",
  titleAccent: "resolve o seu dia",
  description:
    "Do café da manhã ao cinema da noite, tudo acontece a poucos passos da sua porta.",
  items: [
    {
      id: "piscina",
      name: "Piscina adulto",
      description:
        "Lâmina d'água com deck solarium e vista aberta para o horizonte.",
      image: "/img/lazer-piscina.jpg",
      icon: "waves",
      span: "wide",
    },
    {
      id: "cinema",
      name: "Cinema",
      description: "Sala privativa com projeção e poltronas reclináveis.",
      image: "/img/lazer-cinema.jpg",
      icon: "clapperboard",
    },
    {
      id: "salao",
      name: "Salão de festas",
      description: "Ambiente amplo e equipado para receber sem sair de casa.",
      image: "/img/lazer-salao-festas.jpg",
      icon: "party",
    },
    {
      id: "kids",
      name: "Piscina e área kids",
      description:
        "Espaço seguro e supervisionável, com piscina infantil e brinquedoteca.",
      image: "/img/lazer-kids.jpg",
      icon: "kids",
      span: "tall",
    },
    {
      id: "mercado",
      name: "Mercado",
      description: "Mercado autônomo 24h dentro do condomínio.",
      image: "/img/lazer-mercado.jpg",
      icon: "cart",
    },
    {
      id: "recreativa",
      name: "Área recreativa",
      description:
        "Espaço de convivência ao ar livre para esporte, lazer e descanso.",
      image: "/img/lazer-recreativa.jpg",
      icon: "trees",
      span: "wide",
    },
  ] satisfies Amenity[],
} as const;

/* ------------------------------------------------------------------ */
/* Galeria                                                             */
/* ------------------------------------------------------------------ */

export const galeria = {
  eyebrow: "Galeria",
  title: "O SKYGLASSES",
  titleAccent: "por dentro",
  description:
    "Imagens meramente ilustrativas do empreendimento e das áreas comuns.",
  // PENDENTE: substituir pelas fotos e renders oficiais do prédio
  images: [
    { src: "/img/galeria-01.jpg", caption: "Fachada ao entardecer" },
    { src: "/img/galeria-02.jpg", caption: "Living integrado" },
    { src: "/img/galeria-03.jpg", caption: "Suíte principal" },
    { src: "/img/galeria-04.jpg", caption: "Varanda com vista mar" },
    { src: "/img/galeria-05.jpg", caption: "Deck da piscina" },
    { src: "/img/galeria-06.jpg", caption: "Hall de entrada" },
  ],
} as const;

/* ------------------------------------------------------------------ */
/* Localização                                                         */
/* ------------------------------------------------------------------ */

export const localizacao = {
  eyebrow: "Localização",
  title: "A poucos passos",
  titleAccent: "da areia",
  // PENDENTE: endereço completo, bairro/cidade e link do Google Maps
  address: "Endereço a confirmar",
  description:
    "Uma região que combina o silêncio da orla com a conveniência de ter tudo por perto.",
  image: "/img/localizacao-mapa.jpg",
  mapsUrl: "https://maps.google.com/",
  // PENDENTE: distâncias reais
  pois: [
    { label: "Praia", distance: "A confirmar" },
    { label: "Supermercado", distance: "A confirmar" },
    { label: "Escolas", distance: "A confirmar" },
    { label: "Farmácia e serviços", distance: "A confirmar" },
    { label: "Restaurantes", distance: "A confirmar" },
  ],
} as const;

/* ------------------------------------------------------------------ */
/* Depoimentos                                                         */
/* ------------------------------------------------------------------ */

// PENDENTE: depoimentos reais de clientes da imobiliária (com autorização de uso)
export const depoimentos = {
  eyebrow: "Quem já comprou com a gente",
  title: "A confiança de quem",
  titleAccent: "encontrou o lugar certo",
  items: [
    {
      quote:
        "Do primeiro contato à entrega das chaves, a equipe conduziu tudo com clareza. Nunca fiquei sem resposta.",
      author: "Cliente Imob22",
      role: "Comprador",
    },
    {
      quote:
        "Fizemos várias visitas até achar a planta certa. Em nenhum momento houve pressa ou pressão para fechar.",
      author: "Cliente Imob22",
      role: "Investidora",
    },
    {
      quote:
        "A parte de documentação e financiamento era o que mais me assustava, e foi justamente onde mais me ajudaram.",
      author: "Cliente Imob22",
      role: "Primeiro imóvel",
    },
  ],
} as const;

/* ------------------------------------------------------------------ */
/* Contato                                                             */
/* ------------------------------------------------------------------ */

export const contato = {
  eyebrow: "Fale com a gente",
  title: "Vamos marcar",
  titleAccent: "a sua visita",
  description:
    "Preencha o formulário ou chame no WhatsApp. Um corretor da Imob22 responde e organiza a visita ao stand no melhor horário para você.",
  whatsappCta: "Chamar no WhatsApp",
  formCta: "Quero ser contatado",
  interesses: [
    "Tipo A — 2 quartos com suíte",
    "Tipo B — 2 suítes",
    "Ainda não sei, quero orientação",
  ],
  disclaimer:
    "Ao enviar, você concorda em ser contatado pela Imob22 sobre este empreendimento.",
} as const;

/* ------------------------------------------------------------------ */
/* Rodapé                                                              */
/* ------------------------------------------------------------------ */

export const footer = {
  legal:
    "Imagens meramente ilustrativas. Medidas, acabamentos e áreas de lazer sujeitos a alteração conforme memorial descritivo e projeto aprovado pelos órgãos competentes.",
} as const;
