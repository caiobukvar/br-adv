import Image from "next/image";
import Construction from "../../assets/images/construction/under-construction.svg";
import styles from "./styles.module.css";
import { Inter, Teko } from "next/font/google";
const teko = Teko({ subsets: ["latin"] });

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
  },
  {
    id: 3,
    title: "Direito tributário",
    items: [
      "Ação declaratória",
      "Ação de anulação de débito fiscal",
      "Ação de repetição de indébito",
    ],
  },
  {
    id: 4,
    title: "Direito empresarial e corporativo",
    items: [
      "Atuação semelhante a um jurídico interno, com assessoria jurídica completa",
      "Implementação de programas de adequação à Lei Geral de Proteção de Dados (LGPD)",
      "Elaboração de código de conduta e implementação de compliance corporativo",
    ],
  },
  {
    id: 5,
    title: "Outras áreas do direito",
    items: ["Direito Civil", "Direito Penal", "Direito Trabalhista"],
  },
];

export default function WorkAreas() {
  return (
    <div className={teko.className}>
      {specs.map((spec) => (
        <div key={spec.id}>
          <h3>{spec.title}</h3>
          <ul>
            {spec.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
      <Image src="" alt="" />
    </div>
  );
}
