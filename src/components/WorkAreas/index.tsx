"use client";
import Image from "next/image";
import styles from "./styles.module.css";
import WhatsappIcon from "../../assets/images/icons/logo-whatsapp-white.svg";
import WhatsappIconGreen from "../../assets/images/icons/logo-whatsapp-green.svg";
import i18n from "i18next";
import { useTranslation } from "react-i18next";

export default function WorkAreas() {
  const { t } = useTranslation();

  const language = i18n.language;

  const specs = require(`../../translations/${language}-specializations.json`);

  function redirectToWhats(link: string) {
    window.open(link, "_blank");
  }

  return (
    <div className={styles.container}>
      {specs.map((spec: any, index: number) => (
        <div key={spec.id} className={styles.wrapper}>
          <div
            className={index % 2 === 0 ? styles.even : styles.odd}
            id={`${index}`}
            style={{ backgroundImage: `url(${spec.img})` }}
          >
            <div className={styles.list}>
              <h3>{spec.title}</h3>
              <ul>
                {spec.items.map((item: string) => (
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
            <p>{t("areas.s3_button")}</p>
          </button>
        </div>
      ))}
    </div>
  );
}
