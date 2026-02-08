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

export type ProjectCategory =
  | 'creativeDirection'
  | 'visualIdentity'
  | 'printEditorial'
  | 'illustrationPatterns'
  | 'webDesign'
  | 'film'
  | 'socialMedia'

export interface Project {
  id: string
  image: string
  date: string
  categories: ProjectCategory[]
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
  categories: ProjectCategory[]
  media: MediaItem[]
  quote?: string
  quoteText?: string[]
}

export const projects: Project[] = [
  {
    id: "the-new-eden",
    image: "/images/projects/eden/the-new-eden.png",
    date: "2021",
    categories: ['creativeDirection', 'visualIdentity', 'film'],
    media: [
      { type: 'video', src: "/videos/projects/eden/1.mp4" },
      { type: 'image', src: "/images/projects/eden/2.png" },
      { type: 'video', src: "/videos/projects/eden/3.mp4", controls: true },
      { type: 'image', src: "/images/projects/eden/4.png" },
      { type: 'video', src: "/videos/projects/eden/5.mp4" },
      { type: 'video', src: "/videos/projects/eden/6.mp4" },
    ],
    translations: {
      en: {
        title: "The New Eden",
        subtitle: "Moving Narrative",
        description: [
          "The New Eden is a concept collection by a leading Portuguese textile company at the forefront of sustainability in Europe. Every element, from fiber to finish, is 100% traceable, responsibly sourced, and designed to honor the planet.",
          "We collaborated on the visual narrative of this project through creative direction, film - awarded by the Fashion Film Festival - and the design of graphic elements that articulate the company's purpose to global clients.",
          "Rooted in the union between the plant and mineral kingdoms, it celebrates the use of natural fibers - cotton, hemp, and linen - and pioneering dyeing innovations using mineral pigments."
        ],
        role: "Creative Direction, Film and Graphic Design",
        client: "Adalberto, Portugal",
        award: "Best Director, Fashion Film Festival 2021",
        quoteText: ["More than a trend, The New Eden is a manifesto: a call to return to natural resources with awareness and intention. If the garden of Eden belongs to myth, our planet remains - the only Eden we have left, and the one we must protect. It invites us to rediscover the rhythm of the Earth, and to remember that true innovation begins when we slow down enough to listen."],
        quote: "This is The New Eden, commonly known as Planet Earth. Look after it.",
      },
      pt: {
        title: "The New Eden",
        subtitle: "Narrativas em Movimento",
        description: [
          "The New Eden é uma coleção conceptual desenvolvida para uma empresa têxtil portuguesa na linha da frente da sustentabilidade europeia. Cada elemento, da fibra ao acabamento da matéria-prima é 100% rasteável, de origem certificada e concebido para honrar o planeta.",
          "O nosso trabalho assentou na construção narrativa do projecto através de direção criativa, realização e produção de um filme - premiado pelo Fashion Film Festival - assim como o desenho de elementos gráficos que permitiram ao cliente comunicar este manifesto.",
          "Nascida do diálogo entre os reinos vegetal e mineral, a coleção celebra o uso de fibras naturais - algodão, cânhamo e linho - e processos inovadores de tingimento com pigmentos minerais."
        ],
        role: "Design Gráfico, Direção Criativa e Filme",
        client: "Adalberto, Portugal",
        award: "Melhor Realização, Fashion Film Festival, 2021",
        quoteText: [
          "Mais do que uma tendência, The New Eden afirma-se como um manifesto: um apelo a um regresso consciente e intencional aos recursos naturais. Se o Jardim do Éden pertence ao imaginário, o planeta que habitamos continua a ser o nosso verdadeiro jardim - o único que temos e aquele que importa preservar. É um convite para voltar a escutar o ritmo da terra e a reconhecer que a verdadeira inovação nasce quando desaceleramos e aprendemos a ouvir."
        ],
        quote: "The New Eden. Nome vulgar? Planeta Terra. Preserva-o.",
      }
    }
  },
  {
    id: "gamanatura",
    image: "/images/projects/gamanatura/gamanatura.png",
    date: "2025",
    categories: ['creativeDirection', 'visualIdentity', 'printEditorial', 'illustrationPatterns'],
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
          "A Gamanatura é uma marca portuguesa de têxteis-lar com mais de 30 anos de história, enraizada no mercado ibérico. À medida que evolui para um posicionamento de luxo -  expandindo-se da roupa de cama para a moda - a marca começa a ser comercializada em mercados como Itália, Estados Unidos e Emirados Árabes Unidos.",
          "Trabalhámos com a Gamanatura na construção de uma nova direção criativa aplicada a todos os pontos de comunicação da marca, do design gráfico ao packaging, fotografia e web design.",
          "Este novo capítulo traduziu-se numa nova marca: agora com um tom de voz mais sofisticado, uma identidade visual contemporânea, e uma estrutura de storytelling clara que reforça a ligação emocional. Aplicado de forma consistente em todos os pontos de contacto, o nosso trabalho constrói uma presença distinta, posicionando a Gamanatura como uma marca de luxo moderna."
        ],
        role: "Branding, Design Gráfico, Direção Criativa, Fotografia, Ilustração, Packaging e Web Design",
        client: "Gamanatura, Portugal",
        quoteText: [
          "No desenvolvimento do packaging, o nosso objectivo era não só honrar a história da marca, como projectar uma visão para o seu futuro. Começámos por pintar à mão uma série de elementos-chave do universo da Gamanatura, que depois se intrincaram num padrão estilo Toile de Jouy.",
          "A natureza artesanal do trabalho esteve sempre no centro de todo o processo. Para enriquecer o resultado final e alcançar um acabamento luxuoso e orientado ao detalhe, combinámos o padrão ilustrado com aplicação de foil e relevo, que se traduziu num objeto tátil com aspecto premium.",
          "O website foi desenvolvido a partir de uma visão contemporânea, em que a simplicidade assume papel central, permitindo que a imagem e a narrativa da marca se destaquem."
        ]
      }
    }
  },
  {
    id: "palestine-poster",
    image: "/images/projects/palestine/palestine-poster.png",
    date: "2023",
    categories: ['webDesign'],
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
          "Palestine Poster Archive é um projeto de web design que assenta na reformulação de um arquivo digital dedicado à recolha e preservação de cartazes palestinianos. Num contexto em que o povo palestiniano vê a sua continuidade ameaçada, a preservação desta herança gráfica assume-se como algo que vai muito além do registo histórico - é, também, um ato político e cultural.",
          "O trabalho desenvolveu-se a partir da reorganização da estrutura visual e da experiência do utilizador do website, procurando dar clareza, dignidade e visibilidade a um acervo visual de grande força simbólica. O novo desenho reforça o arquivo enquanto espaço vivo de memória, resistência e identidade, assegurando que estas expressões gráficas permanecem acessíveis e presentes.",
          "Todos os cartazes e materiais visuais apresentados no arquivo são reproduzidos exclusivamente para fins arquivísticos e educativos, permanecendo propriedade intelectual dos seus autores, designers ou instituições associadas."
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
    categories: ['illustrationPatterns'],
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
          "A Zara Home é uma marca de têxteis-lar e decoração que faz parte do grupo espanhol Inditex. Reconhecida pelas suas coleções contemporâneas e pela forte presença internacional, tem centenas de lojas físicas e uma plataforma online ativa em mais de 60 países. Desde 2018, e em colaboração com a direção criativa da marca, temos vindo a desenvolver uma série de padrões para os seus produtos. O nosso trabalho centra-se essencialmente na reinterpretação de padrões tradicionais, como paisleys e motivos florais.",
        ],
        role: "Design de Padrões e Ilustração",
        client: "Inditex, Espanha",
      }
    }
  },
  {
    id: "textile-solutions",
    image: "/images/projects/adalberto/adalberto-solutions.png",
    date: "2024",
    categories: ['creativeDirection', 'visualIdentity', 'printEditorial', 'socialMedia'],
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
          "A Adalberto Textile Solutions (est. 1969) é uma empresa têxtil portuguesa de referência. Este rebranding acontece num momento-chave da sua trajetória, que evolui de um negócio essencialmente focado em estamparia para um posicionamento global e tecnológico, centrado na inovação têxtil:  a equipa da Adalberto desenvolveu a primeira máscara COVID certificada da indústria, entre outras inovações sustentáveis.",
          "O rebranding foi pensado para comunicar o salto evolutivo: preservar a herança do logótipo original, já reconhecido no mercado, mas redefinindo tudo o que o rodeia - uma direção criativa contemporânea e orientada para a visão tecnológica, uma linguagem fotográfica e ilustrações alinhadas com o novo storytelling, assim como um novo sistema tipográfico, agora mais refinado.",
        ],
        role: "Branding, Design Gráfico, Direção Criativa, Ilustração e Redes Sociais",
        client: "Adalberto Textile Solutions, Portugal",
        quoteText: ["A nova identidade introduz um tom de voz seguro, que equilibra legado e modernidade, assim como transmite confiança e ambição. Aplicado de forma transversal aos sistemas de identidade visual, design gráfico, packaging e conteúdos para redes sociais, o trabalho posiciona a Adalberto não apenas como um produtor, mas como um parceiro tecnológico orientado por propósito, empenhado em redefinir a narrativa têxtil e em gerar um impacto positivo no mundo."],
        quote: "Assentes na História. Impulsionados pelo futuro.",
      }
    }
  },
  {
    id: "bouchara",
    image: "/images/projects/bouchara/bouchara-series.png",
    date: "2023",
    categories: ['illustrationPatterns'],
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
          "A Bouchara é uma marca francesa de têxteis-lar e decoração, fundada em 1899. Temos vindo a desenvolver uma série de padrões para os seus produtos, desde 2018, criados em linha com a sua direção criativa. Os padrões são desenhados à mão e assentam numa ideia de movimento e na sobreposição inesperada de elementos, gerando composições dinâmicas, como se estivessem vivos.",
        ],
        role: "Design de Padrões e Ilustração",
        client: "Doucheira",
      }
    }
  },
  {
    id: "spago",
    image: "/images/projects/spago/spago.png",
    date: "2023",
    categories: ['printEditorial'],
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
          "Spago Mangiabile é um projeto pessoal que surge da exploração gráfica. Concretizado sob a forma de um livro editorial, o trabalho parte dos cadernos de engenhos e receitas de Leonardo da Vinci para propor uma leitura contemporânea do seu universo.",
          "Inspirado pela sua abordagem interdisciplinar - onde arte, ciência e engenharia se cruzam - o projeto recupera o carácter lúdico e irónico presente no Codex Romanoff, refletindo sobre o cozinhar, o estar à mesa e os comportamentos sociais no período renascentista. Através de figuras emblemáticas do círculo de Leonardo e da alimentação enquanto elemento de distinção social e poder, Spago Mangiabile constrói uma narrativa visual que cruza história, cultura e exploração gráfica.",
        ],
        role: "Design Gráfico, Desenvolvimento de Conceito e Ilustração",
        client: "Projeto Pessoal",
      }
    }
  },
  {
    id: "elevique",
    image: "/images/projects/elevique/elevique.png",
    date: "2025",
    categories: ['visualIdentity', 'socialMedia'],
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
          "A Elevique é uma agência focada em performance digital, que trabalha com negócios em Portugal e nos Estados Unidos para gerar leads qualificadas de forma consistente. Com base em dados e estratégia, a agência combina SEO, Google Ads, e Meta Ads para ajudar os seus clientes a chegar a públicos com intenção real de compra, mantendo sempre o foco no retorno sobre o investimento.",
          "O nosso trabalho centrou-se no desenvolvimento da identidade visual da Elevique e de templates para redes sociais, criando um sistema claro e coeso que apoia o seu propósito e facilita uma comunicação eficaz.",
        ],
        role: "Identidade Visual e Redes Sociais",
        client: "Elevique, Portugal",
      }
    }
  },
  {
    id: "fine-detail",
    image: "/images/projects/fine/fine-detail.png",
    date: "2024 - 2025",
    categories: ['illustrationPatterns'],
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
          "A Fine Detail Series é uma coleção de padrões pintados à mão, desenvolvida para a Gamanatura, nascida de um profundo espanto pela beleza da natureza que nos rodeia. Enquanto humanos, encontramos paz nas formas orgânicas, e é nessa procura - pela tranquilidade, pelo equilíbrio e pelo reconhecimento da beleza natural - que estes padrões ganham forma.",
        ],
        role: "Design Gráfico e Desenvolvimento de Conceito",
        client: "Gamanatura, Portugal",
        quoteText: ["Cada desenho resulta de um processo lento e consciente, moldado pela paciência, pela atenção e por anos de experiência no desenvolvimento de padrões para o universo da moda. Enraizada na contemplação, a série traduz a complexidade subtil da natureza em composições, onde o tempo, o gesto manual e a observação estão tão presentes quanto a imagem final."],
        quote: "Celebrar a natureza, lutar pela beleza no quotidiano."
      }
    }
  },
  {
    id: "hotel-california",
    image: "/images/projects/california/hotel-california.png",
    date: "2022",
    categories: ['printEditorial'],
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
          "Hotel California é um trabalho pessoal de construção de uma narrativa visual através de uma música, procurando explorar a relação entre o conteúdo de uma mensagem e a forma visual que o expressa. “Hotel California” serve de base conceptual para uma exploração gráfica do excesso. O hedonismo, a auto-indulgência e o lado oculto do sonho americano orientam a seleção de imagens, tipografia, cor e ritmo visual, organizados numa sequência inspirada pelo contraste entre promessa e desilusão.",
        ],
        role: "Design Gráfico e Desenvolvimento de Conceito",
        client: "Projeto Pessoal",
        quoteText: ["A narrativa visual resultante procura amplificar a ambiguidade presente na canção, permitindo que cada leitor construa a sua própria fição interna - um percurso onde é possível fazer check-out, mas nunca abandonar totalmente o eco do excesso."],
        quote: "It’s basically a song about the dark underbelly of the American dream and about excess in America, which is something we knew a lot about."
      }
    }
  },
  {
    id: "psysiolim",
    image: "/images/projects/psysiolim/psysiolim.png",
    date: "2025",
    categories: ['visualIdentity', 'socialMedia'],
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
          "A Physiolim é uma clínica de fisioterapia localizada em Paris. Centrada na educação, na prevenção e no acompanhamento personalizado, com especial atenção a mulheres sobreviventes de cancro da mama, a Physiolim acredita que o movimento é uma ferramenta essencial no processo de recuperação, e entende a fisioterapia como um caminho que envolve tanto o corpo como o lado emocional.",
          "O nosso trabalho passou pela criação da identidade visual e de templates para redes sociais, pensados para comunicar de forma clara, próxima e empática com o público-alvo. Numa área particularmente sensível como a saúde, o sistema visual foi desenvolvido para transmitir confiança, cuidado e segurança, apoiando a Physiolim na comunicação de percursos de recuperação profundamente humanos, com respeito e sensibilidade.",
        ],
        role: "Identidade Visual e Redes Sociais",
        client: "Physiolim, França",
      }
    }
  },
  {
    id: "gaspar-noe",
    image: "/images/projects/gaspar/gaspar-noe.png",
    date: "2022",
    categories: ['webDesign'],
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
          "Gaspar Noé Film Cycle é um website criado para a divulgação de Crossing the Border, um ciclo de cinema dedicado à obra do cineasta franco-argentino Gaspar Noé. O conceito visual parte do impacto de Enter the Void, usando a imagem dos neurónios como metáfora para a intensidade e o carácter fora da norma que definem o seu cinema.",
          "O desenho do website assume o exagero e a provocação como forma de homenagem à linguagem visual de Noé, transportando essa atitude radical para o universo digital. A frase do próprio realizador - “I am actually a real film junkie, it’s my main drug.” - surge como elemento central, reforçando a natureza visceral e obsessiva da sua relação com o cinema",
          "Todas as imagens e materiais audiovisuais apresentados no website permanecem propriedade intelectual dos respetivos titulares de direitos e são utilizados exclusivamente no contexto do projeto do website."
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
    categories: ['illustrationPatterns'],
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
          "A Graccioza é uma marca portuguesa de luxo. Com mais de 50 anos de história, é reconhecida pelas suas toalhas premium, assim como pela presença em alguns dos mais prestigiados pontos de venda internacionais, como o Le Bon Marché e o Harrods. A nossa colaboração centrou-se no desenvolvimento de ilustração. Cada animal ganha forma a partir de salpicos de água, construído com cores fortes e movimentos orgânicos. Totalmente desenhadas à mão, as ilustrações captam uma sensação de frescura, traduzindo a vitalidade do oceano numa linguagem visual vibrante.",
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
    categories: project.categories,
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
      categories: project.categories,
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
