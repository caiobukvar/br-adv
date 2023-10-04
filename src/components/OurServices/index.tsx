import Image from "next/image";
import styles from "./styles.module.css";
import services from "../../services.json";

export default function OurServices() {
  return (
    <div className={styles.container}>
      <h1 className={styles.tracking__in__expand}>Nossos serviços</h1>
      <div>
        {services.map((service) => (
          <div
            key={service.name}
            className={`${styles.services} ${styles.slide__in__bottom}`}
          >
            <p>{service.text}</p>
            <div>
              <Image
                src={service.img}
                alt={service.name}
                width={64}
                height={64}
              />
              <p>{service.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
