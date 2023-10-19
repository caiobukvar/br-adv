"use client";
import Image from "next/image";
import styles from "./styles.module.css";
import { useEffect } from "react";
import i18n from "i18next";
import { useTranslation } from "react-i18next";

export default function OurServices() {

  const { t } = useTranslation();

  const language = i18n.language;

  const services = require(`../../translations/${language}-services.json`);

  useEffect(() => {
    const animationObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const element = entry.target;
        const elementWithDataset = element as Element & { dataset: any };
        const animationClassname = elementWithDataset.dataset.animate;

        if (entry.isIntersecting) {
          elementWithDataset.classList.add(animationClassname);
        }
      });
    });

    const animateElements = document.querySelectorAll(`.${styles.animate}`);

    animateElements.forEach((element) => {
      animationObserver.observe(element);
    });

    return () => {
      animationObserver.disconnect();
    };
  }, []);

  return (
    <div className={styles.container}>
      <h1
        className={`${styles.animate}`}
        data-animate={`${styles.animation__tracking__in__expand}`}
      >
        {t("services.s5_card_title")}
      </h1>
      <div>
        {services.map((service: any) => (
          <div
            key={service.name}
            className={`${styles.services} ${styles.animate}`}
            data-animate={`${styles.animation__slide__in__bottom}`}
          >
            <p>{t(service.text)}</p>
            <div>
              <Image
                src={service.img}
                alt={service.name}
                width={64}
                height={64}
              />
              <p>{t(service.name)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
