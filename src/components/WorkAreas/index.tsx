import Image from "next/image";
import styles from "./styles.module.css";
import { Inter, Aleo } from "next/font/google";
import WhatsappIcon from "../../assets/images/icons/logo-whatsapp-white.svg";
import WhatsappIconGreen from "../../assets/images/icons/logo-whatsapp-green.svg";

const teko = Aleo({ subsets: ["latin"] });

const specs = [
  {
    id: 1,
    title: "Direito imobiliário",
    items: [
      "Assessoria para aquisição de imóveis e locações (Due Dilligence)",
      "Incorporações imobiliárias",
      "Loteamentos e condomínios de lotes",
      "Locações",
      "Contratos imobiliários",
      "Regularização de imóveis",
      "Usucapião",
    ],
    img: "/work-area-cards/direito-imobiliario.jpg",
  },
  {
    id: 2,
    title: "Direito de família",
    items: [
      "Casamento e planejamento matrimonial",
      "Separação e divórcio",
      "Guarda dos filhos",
      "Pensão alimentícia",
      "Adoção",
      "Reconhecimento de união estável",
      "Partilha de bens",
      "Testamento e inventários",
    ],
    img: "/work-area-cards/direito-de-familia.jpg",
  },
  {
    id: 3,
    title: "Direito tributário",
    items: [
      "Ação declaratória",
      "Ação de anulação de débito fiscal",
      "Ação de repetição de indébito",
    ],
    img: "/work-area-cards/direito-tributario.png",
  },
  {
    id: 4,
    title: "Direito empresarial e corporativo",
    items: [
      "Atuação semelhante a um jurídico interno, com assessoria jurídica completa",
      "Implementação de programas de adequação à Lei Geral de Proteção de Dados (LGPD)",
      "Elaboração de código de conduta e implementação de compliance corporativo",
    ],
    img: "/work-area-cards/direito-empresarial.jpg",
  },
  {
    id: 5,
    title: "Outras áreas do direito",
    items: ["Direito Civil", "Direito Penal", "Direito Trabalhista"],
    img: "/work-area-cards/outras-areas.jpg",
  },
];

export default function WorkAreas() {
  return (
    <div className={teko.className}>
      <div className={styles.container}>
        {specs.map((spec, index) => (
          <div key={spec.id} className={styles.wrapper}>
            <div
              className={index % 2 === 0 ? styles.even : styles.odd}
              id={`${index}`}
              style={{ backgroundImage: `url(${spec.img})` }}
            >
              <div className={styles.list}>
                <h3>{spec.title}</h3>
                <ul>
                  {spec.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <button className={styles.btn__whatsapp}>
              <Image
                src={WhatsappIcon}
                alt="icon-whats-white"
                width={20}
                height={20}
                className={styles.image__white}
              />
              <Image
                src={WhatsappIconGreen}
                alt="icon-whats"
                width={20}
                height={20}
                className={styles.image__green}
              />
              <p>Contato</p>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
