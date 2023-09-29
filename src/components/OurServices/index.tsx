import Image from "next/image";
import styles from "./styles.module.css";

const services = [
  {
    name: "Advocacia extrajudicial",
    text: "Bianca Rocha Advocacia é um escritório completo, sempre em busca da solução rápida para as questões, economizando o tempo do cliente e aumentando a satisfação do cliente",
    img: "",
  },
  {
    name: "Direito de família e sucessões",
    text: "Abordagem personalizada em cada caso, experiência na atuação em divórcios judiciais e extrajudiciais, inventários, processos de guarda, etc.",
    img: "",
  },
  {
    name: "Consultorias",
    text: "Consultoria especializada em processos envolvendo direito imobiliário, com elaboração e revisão de contratos, análise de risco de compra e venda, usucapião, ações possessórias, etc.",
    img: "",
  },
];

export default function OurServices() {
  return (
    <div className={styles.container}>
      <h1>Nossos serviços</h1>
      <div>
        {services.map((service) => (
          <div key={service.name} className={styles.services}>
            <p>{service.text}</p>
            <div>
              <Image src={service.img} alt={service.name} />
              <p>{service.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
