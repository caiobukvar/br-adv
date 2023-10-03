import Image from "next/image";
import styles from "./styles.module.css";
import services from "../../services.json";

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
