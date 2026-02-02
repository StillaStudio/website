export interface ProjectTranslation {
  title: string
  subtitle: string
  description: string[]
  role: string
  client: string
  award?: string
  quote?: string
  quoteText?: string[]
}

export interface MediaItem {
  type: 'image' | 'video'
  src: string
  controls?: boolean
}

export interface Project {
  id: string
  image: string
  date: string
  media: MediaItem[]
  translations: {
    en: ProjectTranslation
    pt: ProjectTranslation
  }
}

export interface LocalizedProject {
  id: string
  title: string
  subtitle: string
  image: string
  description: string[]
  role: string
  client: string
  award?: string
  date: string
  media: MediaItem[]
  quote?: string
  quoteText?: string[]
}

export const projects: Project[] = [
  {
    id: "the-new-eden",
    image: "/images/projects/eden/the-new-eden.png",
    date: "2021",
    media: [
      { type: 'video', src: "/videos/projects/eden/1.mp4" },
      { type: 'image', src: "/images/projects/eden/2.png" },
      { type: 'video', src: "/videos/projects/eden/3.mp4", controls: true },
      { type: 'video', src: "/videos/projects/eden/4.mp4" },
      { type: 'video', src: "/videos/projects/eden/5.mp4" },
      { type: 'video', src: "/videos/projects/eden/6.mp4" },
    ],
    translations: {
      en: {
        title: "The New Eden",
        subtitle: "Moving Narratives",
        description: [
          "The New Eden is a concept collection by a leading Portuguese textile company of sustainability in textiles. It celebrates the next era of natural fabrics, impeccably sourced, and designed to honor the planet.",
          "We collaborated on the visual narrative of this project through a short film. Awarded by the Fashion Film Festival of Europe. The film invited viewers to explore the company's promise to global clients.",
          "Rooted in the union between the plant and mineral kingdoms, it celebrates the use of natural fibers - cotton, hemp, and linen - and pioneering dyeing innovations using mineral pigments."
        ],
        role: "Creative Direction, Film and Graphic",
        client: "Adalberto, Portugal",
        award: "Best Director, Fashion Film Festival 2021",
        quoteText: ["More than a trend, The New Eden is a manifesto: a call to return to natural resources with awareness and intention. If the garden of Eden belongs to myth, our planet remains - the only Eden we have left, and the one we must protect. It invites us to rediscover the rhythm of the Earth, and to remember that true innovation begins when we slow down enough to listen."],
        quote: "This is The New Eden, commonly known as Planet Earth. Look after it.",
      },
      pt: {
        title: "The New Eden",
        subtitle: "Narrativas em Movimento",
        description: [
          "The New Eden é uma coleção conceptual de uma empresa têxtil portuguesa líder em sustentabilidade têxtil. Celebra a próxima era dos tecidos naturais, impecavelmente obtidos e desenhados para honrar o planeta.",
          "Colaborámos na narrativa visual deste projeto através de um filme curto. Premiado pelo Fashion Film Festival da Europa. O filme convidava os espectadores a explorar a promessa da empresa aos clientes globais.",
          "Enraizado na união entre os reinos vegetal e mineral, celebra o uso de fibras naturais - algodão, cânhamo e linho - e inovações pioneiras de tingimento usando pigmentos minerais."
        ],
        role: "Direção Criativa, Filme e Gráfico",
        client: "Adalberto, Portugal",
        award: "Melhor Realizador, Fashion Film Festival 2021",
        quoteText: ["Mais do que uma tendência, The New Eden é um manifesto: um apelo ao regresso aos recursos naturais com consciência e intenção. Se o jardim do Éden pertence ao mito, o nosso planeta permanece - o único Éden que nos resta, e aquele que devemos proteger. Convida-nos a redescobrir o ritmo da Terra e a lembrar que a verdadeira inovação começa quando abrandamos o suficiente para ouvir."],
        quote: "Este é The New Eden, vulgarmente conhecido como Planeta Terra. Cuida dele.",
      }
    }
  },
  {
    id: "gamanatura",
    image: "/images/projects/gamanatura/gamanatura.png",
    date: "2025",
    media: [
      { type: 'image', src: "/images/projects/gamanatura/1.png" },
      { type: 'image', src: "/images/projects/gamanatura/2.png" },
      { type: 'image', src: "/images/projects/gamanatura/3.png" },
      { type: 'image', src: "/images/projects/gamanatura/4.png" },
      { type: 'image', src: "/images/projects/gamanatura/5.png" },
      { type: 'image', src: "/images/projects/gamanatura/6.png" },
      { type: 'video', src: "/videos/projects/gamanatura/7.mp4" },
      { type: 'video', src: "/videos/projects/gamanatura/8.mp4" },
      { type: 'video', src: "/videos/projects/gamanatura/9.mp4" },
    ],
    translations: {
      en: {
        title: "Gamanatura",
        subtitle: "Premium Branding",
        description: [
          "Gamanatura is a Portuguese home textiles brand with over 30 years of history, rooted in the Iberian market. As it evolves into a refined luxury positioning, expanding beyond bedding into fashion and elevating product quality, the brand set its sights on selective markets such as Italy, the United States and the United Arab Emirates. ",
          "We partnered with Gamanatura to redefine its creative direction across brand communication, including graphic design, packaging, photography and web design.",
          "This new chapter translated into a new brand expression: a confident, sophisticated tone of voice, a contemporary visual identity, and a clear storytelling structure that strengthens emotional connection. Applied consistently across touchpoints, our work establishes a distinct and enduring presence, positioning Gamanatura as a modern luxury brand."
        ],
        role: "Branding, Creative Direction, Graphic Design, Illustration, Packaging, Photography and Webdesign",
        client: "Gamanatura, Portugal",
        quoteText: [
          "While developing the packaging, our goal was to honour the brand's history while projecting a clear vision for its future. We started by hand-painting a series of key elements from Gamanatura's universe. These illustrations were then brought together into an intricate toile de jouy pattern.",
          "The handcrafted nature of the artwork was central to the process. To elevate the final result and achieve a truly luxurious, detail-driven finish, we combined the illustrated pattern with foil stamping and embossed details, transforming the packaging into a tactile, premium object.",
          "The website was designed with a clean, contemporary and editorial approach, prioritising clarity and restraint to let imagery and storytelling lead."
        ]
      },
      pt: {
        title: "Gamanatura",
        subtitle: "Branding Premium",
        description: [
          "A Gamanatura é uma marca portuguesa de têxteis-lar com mais de 30 anos de história, enraizada no mercado ibérico. Ao evoluir para um posicionamento de luxo refinado, expandindo-se para além da roupa de cama para a moda e elevando a qualidade dos produtos, a marca direcionou-se para mercados seletivos como Itália, Estados Unidos e Emirados Árabes Unidos.",
          "Colaborámos com a Gamanatura para redefinir a sua direção criativa em toda a comunicação da marca, incluindo design gráfico, packaging, fotografia e web design.",
          "Este novo capítulo traduziu-se numa nova expressão de marca: um tom de voz confiante e sofisticado, uma identidade visual contemporânea e uma estrutura narrativa clara que fortalece a conexão emocional. Aplicado consistentemente em todos os pontos de contacto, o nosso trabalho estabelece uma presença distinta e duradoura, posicionando a Gamanatura como uma marca de luxo moderna."
        ],
        role: "Branding, Direção Criativa, Design Gráfico, Ilustração, Packaging, Fotografia e Webdesign",
        client: "Gamanatura, Portugal",
        quoteText: [
          "Ao desenvolver o packaging, o nosso objetivo era honrar a história da marca enquanto projetávamos uma visão clara para o seu futuro. Começámos por pintar à mão uma série de elementos-chave do universo Gamanatura. Estas ilustrações foram depois reunidas num intrincado padrão toile de jouy.",
          "A natureza artesanal da obra foi central no processo. Para elevar o resultado final e alcançar um acabamento verdadeiramente luxuoso e detalhado, combinámos o padrão ilustrado com estampagem a quente e detalhes em relevo, transformando o packaging num objeto tátil e premium.",
          "O website foi desenhado com uma abordagem limpa, contemporânea e editorial, priorizando a clareza e a contenção para deixar a imagem e a narrativa liderar."
        ]
      }
    }
  },
  {
    id: "palestine-poster",
    image: "/images/projects/palestine/palestine-poster.png",
    date: "2023",
    media: [
      { type: 'image', src: "/images/projects/palestine/1.png" },
      { type: 'image', src: "/images/projects/palestine/2.png" },
      { type: 'video', src: "/videos/projects/palestine/3.mp4" },
      { type: 'image', src: "/images/projects/palestine/4.png" },
      { type: 'image', src: "/images/projects/palestine/5.png" },
      { type: 'image', src: "/images/projects/palestine/6.png" },
      { type: 'image', src: "/images/projects/palestine/7.png" },
    ],
    translations: {
      en: {
        title: "Palestine Poster Archive",
        subtitle: "Digital Archive",
        description: [
          "Palestine Poster Archive is a web design project centered on the redesign of a digital archive dedicated to collecting and preserving Palestinian posters. At a time when the Palestinian people face an existential threat to their continuity, safeguarding graphic heritage becomes more than an act of documentation - it is a political and cultural gesture.",
          "Our work focused on rethinking the website's visual structure and user experience, giving clarity, dignity and visibility to a powerful collection of visual narratives. The redesign reinforces the archive's role as a living repository of resistance, memory and identity, ensuring that these graphic expressions continue to be seen, accessed and remembered.",
          "All posters and visual materials featured in the archive are reproduced for archival and educational purposes only and remain the intellectual property of their original authors, designers, or associated institutions."
        ],
        role: "Web Design",
        client: "Personal project",
      },
      pt: {
        title: "Palestine Poster Archive",
        subtitle: "Arquivo Digital",
        description: [
          "Palestine Poster Archive é um projeto de web design centrado no redesign de um arquivo digital dedicado a colecionar e preservar cartazes palestinianos. Numa altura em que o povo palestiniano enfrenta uma ameaça existencial à sua continuidade, salvaguardar o património gráfico torna-se mais do que um ato de documentação - é um gesto político e cultural.",
          "O nosso trabalho focou-se em repensar a estrutura visual e experiência de utilizador do website, dando clareza, dignidade e visibilidade a uma poderosa coleção de narrativas visuais. O redesign reforça o papel do arquivo como repositório vivo de resistência, memória e identidade, assegurando que estas expressões gráficas continuem a ser vistas, acedidas e lembradas.",
          "Todos os cartazes e materiais visuais apresentados no arquivo são reproduzidos apenas para fins de arquivo e educacionais e permanecem propriedade intelectual dos seus autores originais, designers ou instituições associadas."
        ],
        role: "Web Design",
        client: "Projeto pessoal",
      }
    }
  },
  {
    id: "zara-home",
    image: "/images/projects/zara/zara-home.png",
    date: "2018-2025",
    media: [
      { type: 'video', src: "/videos/projects/zara/1.mp4" },
      { type: 'image', src: "/images/projects/zara/2.png" },
      { type: 'video', src: "/videos/projects/zara/3.mp4" },
      { type: 'video', src: "/videos/projects/zara/4.mp4" },
      { type: 'video', src: "/videos/projects/zara/5.mp4" },
      { type: 'image', src: "/images/projects/zara/6.png" },
    ],
    translations: {
      en: {
        title: "Zara Home Series",
        subtitle: "Pattern Design",
        description: [
          "Zara Home is a global home décor and textiles label, part of the Spanish Inditex group. It is known for its contemporary collections and presence in markets worldwide, with hundreds of stores and online reach across more than 60 countries. Since 2018, in line with its creative direction, we have been developing a series of patterns for their products. In addition to contemporary motifs, our work also explores more traditional patterns, such as paisleys and floral designs.",
        ],
        role: "Illustration and Pattern Design",
        client: "Inditex, Spain",
      },
      pt: {
        title: "Zara Home Series",
        subtitle: "Design de Padrões",
        description: [
          "A Zara Home é uma marca global de decoração e têxteis para o lar, parte do grupo espanhol Inditex. É conhecida pelas suas coleções contemporâneas e presença em mercados mundiais, com centenas de lojas e alcance online em mais de 60 países. Desde 2018, em linha com a sua direção criativa, temos desenvolvido uma série de padrões para os seus produtos. Para além de motivos contemporâneos, o nosso trabalho também explora padrões mais tradicionais, como paisley e desenhos florais.",
        ],
        role: "Ilustração e Design de Padrões",
        client: "Inditex, Espanha",
      }
    }
  },
  {
    id: "textile-solutions",
    image: "/images/projects/adalberto/adalberto-solutions.png",
    date: "2024",
    media: [
      { type: 'image', src: "/images/projects/adalberto/1.png" },
      { type: 'video', src: "/videos/projects/adalberto/2.mp4" },
      { type: 'video', src: "/videos/projects/adalberto/3.mp4" },
      { type: 'video', src: "/videos/projects/adalberto/4.mp4" },
      { type: 'image', src: "/images/projects/adalberto/5.png" },
      { type: 'image', src: "/images/projects/adalberto/6.png" },
      { type: 'video', src: "/videos/projects/adalberto/7.mp4" },
    ],
    translations: {
      en: {
        title: "Adalberto Textile Solutions",
        subtitle: "Textiles of Tomorrow",
        description: [
          "Adalberto Textile Solutions is a leading Portuguese textile company at the forefront of sustainability in Europe. We partnered with Adalberto as it evolved from a printing house founded in 1969 into a global, tech-forward business engineering the textiles of tomorrow: the team behind the industry's first certified tech COVID mask and a host of sustainable innovations.",
          "Our rebrand was built to communicate that leap: preserving the recognisable heritage of the original logo while reframing everything around it - a sharper creative direction, a purposeful photographic language, bespoke illustrations, and a refined typographic system that reads as technical, confident and contemporary.",
        ],
        role: "Branding, Creative Direction, Graphic Design, Illustration and Social Media",
        client: "Adalberto Textile Solutions, Portugal",
        quoteText: ["The new identity introduces a fresh, bold and confident voice that balances legacy with modernity, signalling both trust and ambition. Delivered across visual identity systems, graphic design, packaging and social media content, the work positions Adalberto not just as a manufacturer, but as a mission-driven technology partner redefining the textile narrative to create measurable positive impact."],
        quote: "Built on Legacy. Driven by the Future.",
      },
      pt: {
        title: "Adalberto Textile Solutions",
        subtitle: "Têxteis do Amanhã",
        description: [
          "A Adalberto Textile Solutions é uma empresa têxtil portuguesa líder na vanguarda da sustentabilidade na Europa. Colaborámos com a Adalberto enquanto evoluía de uma casa de impressão fundada em 1969 para um negócio global e tecnológico que engenharia os têxteis do amanhã: a equipa por trás da primeira máscara COVID tech certificada da indústria e uma série de inovações sustentáveis.",
          "O nosso rebranding foi construído para comunicar esse salto: preservando o património reconhecível do logótipo original enquanto reenquadrava tudo à sua volta - uma direção criativa mais afiada, uma linguagem fotográfica intencional, ilustrações personalizadas e um sistema tipográfico refinado que se lê como técnico, confiante e contemporâneo.",
        ],
        role: "Branding, Direção Criativa, Design Gráfico, Ilustração e Redes Sociais",
        client: "Adalberto Textile Solutions, Portugal",
        quoteText: ["A nova identidade introduz uma voz fresca, ousada e confiante que equilibra legado com modernidade, sinalizando tanto confiança como ambição. Entregue através de sistemas de identidade visual, design gráfico, packaging e conteúdo para redes sociais, o trabalho posiciona a Adalberto não apenas como fabricante, mas como parceiro tecnológico orientado por uma missão que redefine a narrativa têxtil para criar impacto positivo mensurável."],
        quote: "Construído sobre Legado. Impulsionado pelo Futuro.",
      }
    }
  },
  {
    id: "bouchara",
    image: "/images/projects/bouchara/bouchara-series.png",
    date: "2023",
    media: [
      { type: 'video', src: "/videos/projects/bouchara/1.mp4" },
      { type: 'video', src: "/videos/projects/bouchara/2.mp4" },
      { type: 'video', src: "/videos/projects/bouchara/3.mp4" },
      { type: 'video', src: "/videos/projects/bouchara/4.mp4" },
      { type: 'image', src: "/images/projects/bouchara/5.png" },
      { type: 'image', src: "/images/projects/bouchara/6.png" },
      { type: 'video', src: "/videos/projects/bouchara/7.mp4" },
      { type: 'image', src: "/images/projects/bouchara/8.png" },
    ],
    translations: {
      en: {
        title: "Bouchara Series",
        subtitle: "Pattern Design",
        description: [
          "Bouchara is a historic French home textiles and décor company, founded in 1899, with a long-standing presence in the French market. Since 2018, we have been developing a series of patterns for their products, created in line with its creative direction. The designs are handpainted, driven by movement and layered connections, resulting in dynamic compositions that seem to come to life.",
        ],
        role: "Illustration and Pattern Design",
        client: "Doucheira",
      },
      pt: {
        title: "Bouchara Series",
        subtitle: "Design de Padrões",
        description: [
          "A Bouchara é uma histórica empresa francesa de têxteis-lar e decoração, fundada em 1899, com uma presença de longa data no mercado francês. Desde 2018, temos desenvolvido uma série de padrões para os seus produtos, criados em linha com a sua direção criativa. Os designs são pintados à mão, impulsionados por movimento e conexões em camadas, resultando em composições dinâmicas que parecem ganhar vida.",
        ],
        role: "Ilustração e Design de Padrões",
        client: "Doucheira",
      }
    }
  },
  {
    id: "spago",
    image: "/images/projects/spago/spago.png",
    date: "2023",
    media: [
      { type: 'image', src: "/images/projects/spago/1.png" },
      { type: 'video', src: "/videos/projects/spago/2.mp4" },
      { type: 'image', src: "/images/projects/spago/3.png" },
      { type: 'video', src: "/videos/projects/spago/4.mp4" },
      { type: 'image', src: "/images/projects/spago/5.png" },
      { type: 'image', src: "/images/projects/spago/6.png" },
    ],
    translations: {
      en: {
        title: "Spago Mangiabile",
        subtitle: "Graphic Narrative",
        description: [
          "Spago Mangiabile is a personal project born from graphic exploration. Materialised as an editorial book, the project draws inspiration from Leonardo da Vinci's notebooks of inventions and recipes, reinterpreting them through a contemporary lens. ",
          "Reflecting Leonardo's interdisciplinary mindset - where art, science and engineering coexist - the work explores the playful and satirical tone found in the Codex Romanoff, touching on cooking, table manners and social behaviour during the Renaissance. ",
          "Through fictionalised characters from Leonardo's world and references to food as a marker of power and social structure, Spago Mangiabile becomes a visual and conceptual exploration of gastronomy, society and human behaviour, where historical narrative and graphic exploration meet."
        ],
        role: "Concept Development, Graphic Design and Illustration",
        client: "Personal Project",
      },
      pt: {
        title: "Spago Mangiabile",
        subtitle: "Narrativa Gráfica",
        description: [
          "Spago Mangiabile é um projeto pessoal nascido da exploração gráfica. Materializado como um livro editorial, o projeto inspira-se nos cadernos de invenções e receitas de Leonardo da Vinci, reinterpretando-os através de uma lente contemporânea.",
          "Refletindo a mentalidade interdisciplinar de Leonardo - onde arte, ciência e engenharia coexistem - o trabalho explora o tom lúdico e satírico encontrado no Codex Romanoff, tocando na culinária, etiqueta à mesa e comportamento social durante o Renascimento.",
          "Através de personagens ficcionalizadas do mundo de Leonardo e referências à comida como marcador de poder e estrutura social, Spago Mangiabile torna-se uma exploração visual e conceptual da gastronomia, sociedade e comportamento humano, onde narrativa histórica e exploração gráfica se encontram."
        ],
        role: "Desenvolvimento de Conceito, Design Gráfico e Ilustração",
        client: "Projeto Pessoal",
      }
    }
  },
  {
    id: "elevique",
    image: "/images/projects/elevique/elevique.png",
    date: "2025",
    media: [
      { type: 'video', src: "/videos/projects/elevique/1.mp4" },
      { type: 'image', src: "/images/projects/elevique/2.png" },
      { type: 'image', src: "/images/projects/elevique/3.png" },
      { type: 'image', src: "/images/projects/elevique/4.png" },
      { type: 'video', src: "/videos/projects/elevique/5.mp4" },
      { type: 'image', src: "/images/projects/elevique/6.png" },
      { type: 'image', src: "/images/projects/elevique/7.png" },
    ],
    translations: {
      en: {
        title: "Elevique",
        subtitle: "Visual Communication",
        description: [
          "Elevique is a fully digital performance-focused agency, working with businesses in Portugal and the United States to generate consistent, qualified leads. Grounded in data and strategy, the agency combines SEO, Google Ads and Meta Ads to help clients reach audiences that are ready to convert, always with a clear focus on return on investment.",
          "Our work centred on developing Elevique's visual identity and social media templates, creating a clear and cohesive system that supports their purpose and enables confident, effective communication across digital channels.",
        ],
        role: "Social Media Design and Visual Identity",
        client: "Elevique, Portugal",
      },
      pt: {
        title: "Elevique",
        subtitle: "Comunicação Visual",
        description: [
          "A Elevique é uma agência totalmente digital focada em performance, trabalhando com empresas em Portugal e nos Estados Unidos para gerar leads qualificados e consistentes. Fundamentada em dados e estratégia, a agência combina SEO, Google Ads e Meta Ads para ajudar os clientes a alcançar audiências prontas a converter, sempre com foco claro no retorno do investimento.",
          "O nosso trabalho centrou-se no desenvolvimento da identidade visual e templates de redes sociais da Elevique, criando um sistema claro e coeso que suporta o seu propósito e permite uma comunicação confiante e eficaz em todos os canais digitais.",
        ],
        role: "Design para Redes Sociais e Identidade Visual",
        client: "Elevique, Portugal",
      }
    }
  },
  {
    id: "fine-detail",
    image: "/images/projects/fine/fine-detail.png",
    date: "2024 - 2025",
    media: [
      { type: 'video', src: "/videos/projects/fine/1.mp4" },
      { type: 'image', src: "/images/projects/fine/2.png" },
      { type: 'video', src: "/videos/projects/fine/3.mp4" },
      { type: 'video', src: "/videos/projects/fine/4.mp4" },
      { type: 'video', src: "/videos/projects/fine/5.mp4" },
      { type: 'video', src: "/videos/projects/fine/6.mp4" },
      { type: 'image', src: "/images/projects/fine/7.png" },
    ],
    translations: {
      en: {
        title: "Fine Detail Series",
        subtitle: "Pattern Design",
        description: [
          "Fine Detail Series is a collection of hand-painted prints developed for Gamanatura, born from a deep sense of wonder for the beauty of the natural world. As humans, we instinctively find peace in organic forms, and these patterns emerge from that quiet pursuit - a search for calm, balance and a renewed appreciation of nature's details.",
        ],
        role: "Illustration and Pattern Design",
        client: "Gamanatura, Portugal",
        quoteText: ["Each design is the result of a slow, deliberate process, shaped by patience, focus and years of experience in pattern development for the fashion industry. Rooted in contemplation, the series translates nature's subtle complexity into refined, tactile compositions, where time, handwork and observation are as present as the final image itself."],
        quote: "Celebrating nature, fighting for beauty in everyday life."
      },
      pt: {
        title: "Fine Detail Series",
        subtitle: "Design de Padrões",
        description: [
          "Fine Detail Series é uma coleção de estampas pintadas à mão desenvolvida para a Gamanatura, nascida de um profundo sentido de maravilha pela beleza do mundo natural. Como humanos, instintivamente encontramos paz nas formas orgânicas, e estes padrões emergem dessa busca silenciosa - uma procura de calma, equilíbrio e uma renovada apreciação dos detalhes da natureza.",
        ],
        role: "Ilustração e Design de Padrões",
        client: "Gamanatura, Portugal",
        quoteText: ["Cada design é o resultado de um processo lento e deliberado, moldado pela paciência, foco e anos de experiência no desenvolvimento de padrões para a indústria da moda. Enraizada na contemplação, a série traduz a complexidade subtil da natureza em composições refinadas e táteis, onde o tempo, o trabalho manual e a observação estão tão presentes quanto a imagem final em si."],
        quote: "Celebrando a natureza, lutando pela beleza no dia-a-dia."
      }
    }
  },
  {
    id: "hotel-california",
    image: "/images/projects/california/hotel-california.png",
    date: "2022",
    media: [
      { type: 'image', src: "/images/projects/california/1.png" },
      { type: 'video', src: "/videos/projects/california/2.mp4" },
      { type: 'image', src: "/images/projects/california/3.png" },
      { type: 'image', src: "/images/projects/california/4.png" },
      { type: 'image', src: "/images/projects/california/5.png" },
      { type: 'image', src: "/images/projects/california/6.png" },
      { type: 'image', src: "/images/projects/california/7.png" },
    ],
    translations: {
      en: {
        title: "Hotel California",
        subtitle: "Visual Narrative",
        description: [
          "Hotel California is a personal project focused on constructing a visual narrative through a song, seeking to explore the relationship between the content of a message and the visual form that expresses it. \"Hotel California\" serves as the conceptual basis for a graphic exploration of excess. Hedonism, self-indulgence, and the hidden side of the American Dream guide the selection of imagery, typography, colour, and visual rhythm, organised in a sequence inspired by the contrast between promise and disillusion.",
        ],
        role: "Concept Development and Graphic Design",
        client: "Personal Project",
        quoteText: ["The resulting visual narrative seeks to amplify the ambiguity present in the song, allowing each reader to construct their own internal fiction - a path where it is possible to check out, but never fully leave behind the echo of excess."],
        quote: "It's basically a song about the dark underbelly of the American dream."
      },
      pt: {
        title: "Hotel California",
        subtitle: "Narrativa Visual",
        description: [
          "Hotel California é um projeto pessoal focado na construção de uma narrativa visual através de uma canção, procurando explorar a relação entre o conteúdo de uma mensagem e a forma visual que a expressa. \"Hotel California\" serve como base conceptual para uma exploração gráfica do excesso. Hedonismo, autoindulgência e o lado oculto do Sonho Americano guiam a seleção de imagens, tipografia, cor e ritmo visual, organizados numa sequência inspirada pelo contraste entre promessa e desilusão.",
        ],
        role: "Desenvolvimento de Conceito e Design Gráfico",
        client: "Projeto Pessoal",
        quoteText: ["A narrativa visual resultante procura amplificar a ambiguidade presente na canção, permitindo a cada leitor construir a sua própria ficção interna - um caminho onde é possível fazer check-out, mas nunca deixar completamente para trás o eco do excesso."],
        quote: "É basicamente uma canção sobre o lado negro do sonho americano."
      }
    }
  },
  {
    id: "psysiolim",
    image: "/images/projects/psysiolim/psysiolim.png",
    date: "2025",
    media: [
      { type: 'video', src: "/videos/projects/psysiolim/1.mp4" },
      { type: 'image', src: "/images/projects/psysiolim/2.png" },
      { type: 'image', src: "/images/projects/psysiolim/3.png" },
      { type: 'image', src: "/images/projects/psysiolim/4.png" },
      { type: 'video', src: "/videos/projects/psysiolim/5.mp4" },
      { type: 'image', src: "/images/projects/psysiolim/6.png" },
      { type: 'image', src: "/images/projects/psysiolim/7.png" },
    ],
    translations: {
      en: {
        title: "PhysiOlim",
        subtitle: "Visual Communication",
        description: [
          "Physiolim is a France-based physiotherapy practice grounded in education, prevention and personalised care, with a strong focus on supporting breast cancer survivors. Guided by the belief that movement has the power to heal, the practice approaches physiotherapy as both a physical and emotional process.",
          "Our work focused on developing a visual identity and social media templates that could reach the right audience with clarity, empathy and sensitivity. Designed to communicate care, trust and reassurance, the system supports Physiolim in addressing deeply human and delicate health journeys with warmth and respect.",
        ],
        role: "Social Media Design and Visual Identity",
        client: "Physiolim, France",
      },
      pt: {
        title: "PhysiOlim",
        subtitle: "Comunicação Visual",
        description: [
          "A Physiolim é uma prática de fisioterapia sediada em França, fundamentada na educação, prevenção e cuidado personalizado, com forte foco no apoio a sobreviventes de cancro da mama. Guiada pela crença de que o movimento tem o poder de curar, a prática aborda a fisioterapia como um processo tanto físico como emocional.",
          "O nosso trabalho focou-se no desenvolvimento de uma identidade visual e templates de redes sociais que pudessem alcançar a audiência certa com clareza, empatia e sensibilidade. Desenhado para comunicar cuidado, confiança e segurança, o sistema apoia a Physiolim a abordar jornadas de saúde profundamente humanas e delicadas com calor e respeito.",
        ],
        role: "Design para Redes Sociais e Identidade Visual",
        client: "Physiolim, França",
      }
    }
  },
  {
    id: "gaspar-noe",
    image: "/images/projects/gaspar/gaspar-noe.png",
    date: "2022",
    media: [
      { type: 'video', src: "/videos/projects/gaspar/1.mp4" },
      { type: 'image', src: "/images/projects/gaspar/2.png" },
      { type: 'image', src: "/images/projects/gaspar/3.png" },
      { type: 'image', src: "/images/projects/gaspar/4.png" },
      { type: 'image', src: "/images/projects/gaspar/5.png" },
      { type: 'image', src: "/images/projects/gaspar/6.png" },
      { type: 'image', src: "/images/projects/gaspar/7.png" },
    ],
    translations: {
      en: {
        title: "Gaspar Noé Film Cycle",
        subtitle: "Immersive Website",
        description: [
          "Gaspar Noé Film Cycle is a website designed to promote Crossing the Border, a film programme dedicated to the work of Franco-Argentine filmmaker Gaspar Noé. The visual concept draws directly from the visceral impact of Enter the Void, using the image of neurons as an entry point to reflect the intensity, disorientation and boundary-pushing nature of Noé's cinema. ",
          "The design embraces excess and provocation as a tribute to his unmistakable visual language, translating his radical approach to film into a digital experience. Anchored by Noé's own words - \"I am actually a real film junkie, it's my main drug.\" - the website positions the cycle as an immersive encounter with a filmmaker who consistently operates outside the norm.",
          "All images and audiovisual materials presented on the website remain the intellectual property of their respective rights holders and are used exclusively within the context of the website project."
        ],
        role: "Web Design",
        client: "Personal Project",
      },
      pt: {
        title: "Gaspar Noé Film Cycle",
        subtitle: "Website Imersivo",
        description: [
          "Gaspar Noé Film Cycle é um website desenhado para promover Crossing the Border, um programa de filmes dedicado à obra do cineasta franco-argentino Gaspar Noé. O conceito visual inspira-se diretamente no impacto visceral de Enter the Void, usando a imagem de neurónios como ponto de entrada para refletir a intensidade, desorientação e natureza transgressora do cinema de Noé.",
          "O design abraça o excesso e a provocação como tributo à sua linguagem visual inconfundível, traduzindo a sua abordagem radical ao cinema numa experiência digital. Ancorado nas palavras do próprio Noé - \"Na verdade sou um verdadeiro viciado em cinema, é a minha principal droga.\" - o website posiciona o ciclo como um encontro imersivo com um cineasta que opera consistentemente fora da norma.",
          "Todas as imagens e materiais audiovisuais apresentados no website permanecem propriedade intelectual dos seus respetivos detentores de direitos e são utilizados exclusivamente no contexto do projeto do website."
        ],
        role: "Web Design",
        client: "Projeto Pessoal",
      }
    }
  },
  {
    id: "gracciza",
    image: "/images/projects/gracciza/gracciza.png",
    date: "2023 - 2024",
    media: [
      { type: 'image', src: "/images/projects/gracciza/1.png" },
      { type: 'image', src: "/images/projects/gracciza/2.png" },
      { type: 'image', src: "/images/projects/gracciza/3.png" },
      { type: 'video', src: "/videos/projects/gracciza/4.mp4" },
      { type: 'video', src: "/videos/projects/gracciza/5.mp4" },
    ],
    translations: {
      en: {
        title: "Graccioza",
        subtitle: "Handpainted Illustration",
        description: [
          "Graccioza is a Portuguese luxury bath brand with over 50 years of heritage, renowned for its premium towels and a presence in the world's most prestigious retail destinations, including Le Bon Marché and Harrods. Our collaboration focused exclusively on illustration, developed for a collection inspired by the sea. Each animal was illustrated as if emerging from splashes of water, brought to life through bold, summer-infused colours and fluid, expressive forms. Entirely handmade, the illustrations capture a sense of movement and freshness, translating the vitality of the ocean into a vibrant visual language.",
        ],
        role: "Illustration",
        client: "Graccioza, Portugal",
      },
      pt: {
        title: "Graccioza",
        subtitle: "Ilustração Pintada à Mão",
        description: [
          "A Graccioza é uma marca portuguesa de banho de luxo com mais de 50 anos de herança, reconhecida pelas suas toalhas premium e presença nos destinos de retalho mais prestigiados do mundo, incluindo Le Bon Marché e Harrods. A nossa colaboração focou-se exclusivamente na ilustração, desenvolvida para uma coleção inspirada no mar. Cada animal foi ilustrado como se emergisse de salpicos de água, ganhando vida através de cores ousadas e estivais e formas fluidas e expressivas. Inteiramente feitas à mão, as ilustrações capturam um sentido de movimento e frescura, traduzindo a vitalidade do oceano numa linguagem visual vibrante.",
        ],
        role: "Ilustração",
        client: "Graccioza, Portugal",
      }
    }
  },
]

export function getProjectById(id: string, locale: 'en' | 'pt' = 'en'): LocalizedProject | undefined {
  const project = projects.find((project) => project.id === id)
  if (!project) return undefined

  const translation = project.translations[locale]
  return {
    id: project.id,
    image: project.image,
    date: project.date,
    media: project.media,
    title: translation.title,
    subtitle: translation.subtitle,
    description: translation.description,
    role: translation.role,
    client: translation.client,
    award: translation.award,
    quote: translation.quote,
    quoteText: translation.quoteText,
  }
}

export function getAllProjects(locale: 'en' | 'pt' = 'en'): LocalizedProject[] {
  return projects.map((project) => {
    const translation = project.translations[locale]
    return {
      id: project.id,
      image: project.image,
      date: project.date,
      media: project.media,
      title: translation.title,
      subtitle: translation.subtitle,
      description: translation.description,
      role: translation.role,
      client: translation.client,
      award: translation.award,
      quote: translation.quote,
      quoteText: translation.quoteText,
    }
  })
}

export function getAllProjectIds(): string[] {
  return projects.map((project) => project.id)
}
