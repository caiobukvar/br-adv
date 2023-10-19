import i18n from "i18next";
import { initReactI18next } from "react-i18next";

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
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "pt",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
