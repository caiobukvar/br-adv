import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  pt: {
    translation: {
      home: {
        header: "Escritório de advocacia BR",
        title: "DIREITO IMOBILIÁRIO",
        saiba_mais: "Saiba mais",
        s2_title: "Dra. Bianca Rocha",
        s2_subtitle: "Uma advogada apaixonada pela profissão.",
        s2_text: "Atuo com o mercado imobiliário de forma especializada.",
        s2_text2:
          "Me especializei em toda a parte jurídica que envolve os imóveis, principalmente em contratos e incorporação imobiliária.",
        s2_button: "Quem é a Dra. Bianca Rocha",
      },
      areas: {
        s3_title: "NOSSAS ÁREAS DE ATUAÇÃO",
        s3_button: "Contato",
      },
      services: {
        s5_card_title: "Nossos serviços",
      },
      navbar: {
        home: "Início",
        about: "Quem somos",
        contact: "Contato",
        blog: "Blog",
      },
      advice: {
        title: "Assessoria de idiomas",
      },
      about: {
        title: "Dra. Bianca Rocha",
        text: "Especialista em Direito Imobiliário.",
        text2: "Sou uma advogada apaixonada pela profissão.",
        text3: "Atuo com o mercado imobiliário de forma especializada.",
        text4:
          "Me especializei em toda a parte jurídica envolvendo imóveis, principalmente em contratos e incorporação imobiliária.",
        text5:
          "Me formei pela Universiade Salesiana de São Paulo, com pós em Direito Imobiliário, com diversos cursos de extensão jurídicos.",
        text6:
          "Tive o privilégio de trabalhar internacionalmente como estagiária na Organização dos Estados Americanos e ONU-CEPAL.",
        text7:
          "Sou sócia-propietária do escritório Bianca Rocha Advocacia, em Hortolândia/SP, com atuação em todo o Brasil.",
        content_title: "Conheça meus canais de conteúdo:",
        s2_title: "Práticas de Bianca Rocha Advocacia",
        s2_text:
          "Nossos advogados dedicados trazem uma abordagem única para todos os casos. Hoje, trabalhamos com uma série de regulamentos e requisistos. Confira nossas áreas de especialização e ligue para falar sobre suas questões legais hoje mesmo!",
      },
      contact: {
        form_title: "Contato",
        form_name: "Nome",
        form_name_ph: "Insira seu nome",
        form_phone: "Telefone/Whatsapp",
        form_phone_ph: "Insira seu telefone",
        form_email: "E-mail",
        form_email_ph: "Insira seu e-mail",
        form_message: "Assunto",
        form_message_ph: "Insira o motivo de contato",
        send: "Enviar",
        service: "Atendimento",
        error: {
          name: "Nome é obrigatório!",
          phone: "Telefone é obrigatório!",
          email: "E-mail é obrigatório!",
          message: "Mensagem é obrigatória!",
        },
      },
      construction: {
        title: "Em construção",
      },
    },
  },
  en: {
    translation: {
      home: {
        header: "BR Law Firm",
        title: "REAL ESTATE LAW",
        saiba_mais: "Learn more",
        s2_title: "Dr. Bianca Rocha",
        s2_subtitle: "A lawyer passionate about her profession.",
        s2_text: "I work with the real estate market in a specialized way.",
        s2_text2:
          "I specialized in all legal aspects involving real estate, mainly in contracts and real estate development.",
        s2_button: "Who Is Doctor Bianca Rocha",
      },
      areas: {
        s3_title: "OUR AREAS OF ACTIVITY",
        s3_button: "Contact",
      },
      services: {
        s5_card_title: "Our services",
      },
      navbar: {
        home: "Home",
        about: "About us",
        contact: "Contact",
        blog: "Blog",
      },
      advice: {
        title: "LANGUAGE ADVISORY",
      },
      about: {
        title: "Dr. Bianca Rocha",
        text: "Specialist in Real Estate Law.",
        text2: "I am a lawyer passionate about the profession.",
        text3: "I work with the real estate market in a specialized way.",
        text4:
          "Specialized in all legal aspects involving real estate, mainly in contracts and real estate development.",
        text5:
          "Graduated from the Salesiana University of São Paulo, did my postgraduate degree in Real Estate Law, and completed several legal extension courses.",
        text6:
          "Had the privilege of working internationally as an intern at the Organization of American States and UN-ECLAC.",
        text7:
          "Co-owner of the Bianca Rocha Advocacia office in the city of Hortolândia/SP with operations throughout Brazil.",
        content_title: "Discover my content channels:",
        s2_title: "Practices of Bianca Rocha Advocacia",
        s2_text:
          "Our dedicated lawyers bring a unique approach to every case. Today, we work with a series of regulations and requirements. Check out our areas of expertise and call us to discuss your legal questions today.",
      },
      contact: {
        form_title: "Contact",
        form_name: "Name",
        form_name_ph: "Insert your name",
        form_phone: "Phone/Whatsapp",
        form_phone_ph: "Insert your phone",
        form_email: "E-mail",
        form_email_ph: "Insert your e-mail",
        form_message: "Contact Reason",
        form_message_ph: "Insert reason for contact",
        send: "Send",
        service: "Service",
        error: {
          name: "Name is required!",
          phone: "Phone is required!",
          email: "E-mail is required!",
          message: "Message is required!",
        },
      },
      construction: {
        title: "Under construction",
      },
    },
  },
  fr: {
    translation: {
      home: {
        header: "Bureau d'avocat BR",
        title: "DROIT IMMOBILIER",
        saiba_mais: "Savoir plus",
        s2_title: "Dr. Bianca Rocha",
        s2_subtitle: "Une avocate passionnée par son métier.",
        s2_text:
          "Je travaille avec le marché immobilier de manière spécialisée.",
        s2_text2:
          "Je me suis spécialisé dans tous les aspects juridiques liés à l'immobilier, principalement dans les contrats et la promotion immobilière.",
        s2_button: "Qui est le docteur Bianca Rocha",
      },
      areas: {
        s3_title: "NOS DOMAINES D'ACTIVITÉ",
        s3_button: "Contact",
      },
      services: {
        s5_card_title: "NOS SERVICES",
      },
      navbar: {
        home: "Commencer",
        about: "Qui nous sommes",
        contact: "Contact",
        blog: "Blog",
      },
      advice: {
        title: "CONSEIL LINGUISTIQUE",
      },
      about: {
        title: "Dr Bianca Rocha",
        text: "Spécialiste en droit immobilier.",
        text2: "Un avocat passionné par le métier.",
        text3: "Je travaille avec le marché immobilier de manière spécialisée",
        text4:
          "Spécialisé dans tous les aspects juridiques liés à l'immobilier, principalement dans les contrats et la promotion immobilière.",
        text5:
          "J'ai obtenu mon diplôme de l'Université Salesiana de São Paulo, j'ai obtenu mon diplôme de troisième cycle en droit immobilier et j'ai suivi plusieurs cours de vulgarisation juridique.",
        text6:
          "J'ai eu le privilège de travailler à l'échelle internationale en tant que stagiaire à l'Organisation des États américains et à la CEPALC.",
        text7:
          "Copropriétaire du bureau de Bianca Rocha Advocacia dans la ville d'Hortolândia/SP avec des opérations dans tout le Brésil.",
        content_title: "Découvrez mes chaînes de contenu:",
        s2_title: "Pratiques de Bianca Rocha Advocacia",
        s2_text:
          "Nos avocats dévoués apportent une approche unique à chaque cas. Aujourd’hui, nous travaillons avec une série de réglementations et d’exigences. Découvrez nos domaines d’expertise et appelez-nous dès aujourd’hui pour discuter de vos questions juridiques.",
      },
      contact: {
        form_title: "Contact",
        form_name: "Nom",
        form_name_ph: "Entrez votre nom",
        form_phone: "Phone/Whatsapp",
        form_phone_ph: "Entrez votre téléphone",
        form_email: "E-mail",
        form_email_ph: "Entrez votre e-mail",
        form_message: "Raison de contact",
        form_message_ph: "Entrez votre raison de contact",
        send: "Envoyer",
        service: "Service",
        error: {
          name: "Nom est obligatoire!",
          phone: "Téléphone est obligatoire!",
          email: "E-mail est obligatoire!",
          message: "Message est obligatoire!",
        },
      },
      construction: {
        title: "En construction",
      },
    },
  },
  de: {
    translation: {
      home: {
        header: "BR Kanzlei",
        title: "EIGENTUMSRECHT",
        saiba_mais: "Mehr lesen",
        s2_title: "Bianca Rocha",
        s2_subtitle: "Eine Anwältin, die ihren Beruf mit Leidenschaft ausübt.",
        s2_text: "Ich arbeite spezialisiert auf den Immobilienmarkt.",
        s2_text2:
          "Ich habe mich auf alle rechtlichen Aspekte im Zusammenhang mit Immobilien spezialisiert, hauptsächlich auf Verträge und Immobilienentwicklung.",
        s2_button: "Wer ist Doktor Bianca Rocha",
      },
      areas: {
        s3_title: "UNSERE TÄTIGKEITSBEREICHE",
        s3_button: "Kontakt",
      },
      services: {
        s5_card_title: "UNSERE DIENSTLEISTUNGEN",
      },
      navbar: {
        home: "Start",
        about: "Wer Wir Sind",
        contact: "Kontakt",
        blog: "Blog",
      },
      advice: {
        title: "SPRACHBERATUNG",
      },
      about: {
        title: "Bianca Rocha",
        text: "Spezialist für Immobilienrecht.",
        text2: "Ich bin Anwalt mit Leidenschaft für meinen Beruf.",
        text3: "Arbeite spezialisiert auf den Immobilienmarkt.",
        text4:
          "Ich habe mich auf alle rechtlichen Aspekte im Zusammenhang mit Immobilien spezialisiert, hauptsächlich auf Verträge und Immobilienentwicklung.",
        text5:
          "Ich habe meinen Abschluss an der Salesiana-Universität von São Paulo gemacht, mein Aufbaustudium im Immobilienrecht absolviert und mehrere juristische Erweiterungskurse absolviert.",
        text6:
          "Ich hatte das Privileg, als Praktikant bei der Organisation Amerikanischer Staaten und der UN-ECLAC international zu arbeiten l'Organisation des États américains et à la CEPALC</strong>.",
        text7:
          "Miteigentümerin des Büros von Bianca Rocha Advocacia in der Stadt Hortolândia/SP mit Niederlassungen in ganz Brasilien.",
        content_title: "Entdecken Sie meine Content-Kanäle:",
        s2_title: "Praktiken von Bianca Rocha Advocacia",
        s2_text:
          "Unsere engagierten Anwälte verfolgen bei jedem Fall einen einzigartigen Ansatz. Heute arbeiten wir mit einer Reihe von Vorschriften und Anforderungen. Informieren Sie sich über unsere Fachgebiete und rufen Sie uns noch heute an, um Ihre rechtlichen Fragen zu besprechen.",
      },
      contact: {
        form_title: "Kontakt",
        form_name: "Name",
        form_name_ph: "Geben Sie Ihren Namen ein",
        form_phone: "Telefon/Whatsapp",
        form_phone_ph: "Geben Sie Ihr Telefon ein",
        form_email: "E-mail",
        form_email_ph: "Geben Sie Ihre E-Mail-Adresse ein",
        form_message: "Grund des Kontakts",
        form_message_ph: "Kontaktgrund eingeben",
        send: "Senden",
        service: "Dienst",
        error: {
          name: "Name ist erforderlich!",
          phone: "Telefon ist erforderlich!",
          email: "E-Mail ist erforderlich!",
          message: "Nachricht ist erforderlich!",
        },
      },
      construction: {
        title: "Im Bau",
      },
    },
  },
  es: {
    translation: {
      home: {
        header: "OFICINA DE ABOGADOS BR",
        title: "DERECHO INMOBILIARIO",
        saiba_mais: "Sepa mas",
        s2_title: "Dra. Bianca Rocha",
        s2_subtitle: "Una abogada apasionada por su profesión.",
        s2_text: "Trabajo con el mercado inmobiliario de forma especializada.",
        s2_text2:
          "Me especialicé en todos los aspectos jurídicos relacionados con el sector inmobiliario, principalmente en contratos y desarrollo inmobiliario.",
        s2_button: "¿Quién es la doctora Bianca Rocha",
      },
      areas: {
        s3_title: "NUESTRAS ÁREAS DE ACTIVIDAD",
        s3_button: "Contacto",
      },
      services: {
        s5_card_title: "NUESTROS SERVICIOS",
      },
      navbar: {
        home: "Comenzar",
        about: "Quiénes somos",
        contact: "Contacto",
        blog: "Blog",
      },
      advice: {
        title: "ASESORAMIENTO DE IDIOMAS",
      },
      about: {
        title: "Dra. Bianca Rocha",
        text: "Especialista en Derecho Inmobiliario.",
        text2: "Abogada apasionada por la profesión.",
        text3: "Trabajo con el mercado inmobiliario de forma especializada.",
        text4:
          "Me especialicé en todos los aspectos jurídicos relacionados con el sector inmobiliario, principalmente en contratos y desarrollo inmobiliario.",
        text5:
          "Me gradué de la Universidad Salesiana de São Paulo, realicé mi posgrado en Derecho Inmobiliario y realicé varios cursos de extensión jurídica.",
        text6:
          "Tuve el privilegio de trabajar internacionalmente como pasante en la Organización de Estados Americanos y ONU-CEPAL.",
        text7:
          "Copropietaria de la oficina de Bianca Rocha Advocacia en la ciudad de Hortolândia/SP con operaciones en todo Brasil.",
        content_title: "Descubre mis canales de contenido:",
        s2_title: "Prácticas de Bianca Rocha Advocacia",
        s2_text:
          "Nuestros dedicados abogados aportan un enfoque único a cada caso. Hoy en día trabajamos con una serie de normativas y requisitos. Consulte nuestras áreas de especialización y llámenos hoy para discutir sus preguntas legales.",
      },
      contact: {
        form_title: "Contacto",
        form_name: "Nombre",
        form_name_ph: "Ingresa tu nombre",
        form_phone: "Teléfono/Whatsapp",
        form_phone_ph: "Ingresa tu número de teléfono",
        form_email: "E-mail",
        form_email_ph: "Ingresa tu e-mail",
        form_message: "Motivo del contacto",
        form_message_ph: "Introduzca el motivo del contacto",
        send: "Enviar",
        service: "Servicio",
        error: {
          name: "¡Nombre es obligatorio!",
          phone: "¡Teléfono es obligatorio!",
          email: "¡Email es obligatorio!",
          message: "¡Mensaje es obligatoria!",
        },
      },
      construction: {
        title: "¡En obra",
      },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "pt",
    supportedLngs: ["en", "pt", "fr", "de", "es"],
    detection: {
      order: ["htmlTag", "cookie", "localStorage", "path", "subdomain"],
      cache: ["cookie"],
    },
  });

export default i18n;
