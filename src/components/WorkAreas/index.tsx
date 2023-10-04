"use client";
import Image from "next/image";
import styles from "./styles.module.css";
import { Inter, Aleo } from "next/font/google";
import WhatsappIcon from "../../assets/images/icons/logo-whatsapp-white.svg";
import WhatsappIconGreen from "../../assets/images/icons/logo-whatsapp-green.svg";
import specs from "../../specializations.json";
const teko = Aleo({ subsets: ["latin"] });

function redirectToWhats(link: string) {
  window.open(link, "_blank");
}

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
            <button
              className={styles.btn__whatsapp}
              onClick={() => redirectToWhats(spec.link)}
            >
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
