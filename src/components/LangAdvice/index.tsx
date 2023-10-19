"use client";
import Image from "next/image";
import styles from "./styles.module.css";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18n from "i18next";

export default function LangAdvice() {
  const { t } = useTranslation();

  const language = i18n.language;

  const langs = require(`../../translations/${language}-advice.json`);

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
    <div
      className={`${styles.container} ${styles.animate}`}
      data-animate={`${styles.scale__in__center}`}
    >
      <h1>{t("advice.title")}</h1>
      <div className={`${styles.content} ${styles.scale__in__center}`}>
        {langs.map((lang: any) => (
          <div key={lang.lang} className={styles.item}>
            <Image src={lang.img} alt={lang.lang} width={300} height={200} />
            <h2>{t(lang.lang)}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
