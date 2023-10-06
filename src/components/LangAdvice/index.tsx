"use client";
import Image from "next/image";
import styles from "./styles.module.css";
import PT from "../../assets/images/official-pics/assessoria/portugues.png";
import EN from "../../assets/images/official-pics/assessoria/ingles.jpg";
import GE from "../../assets/images/official-pics/assessoria/alemao.jpg";
import ES from "../../assets/images/official-pics/assessoria/espanhol.jpg";
import FN from "../../assets/images/official-pics/assessoria/frances.jpg";
import { useEffect } from "react";

const langs = [
  { lang: "Português", img: PT },
  { lang: "Inglês", img: EN },
  { lang: "Alemão", img: GE },
  { lang: "Espanhol", img: ES },
  { lang: "Francês", img: FN },
];

export default function LangAdvice() {
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
      <h1>Assessoria de idiomas</h1>
      <div className={`${styles.content} ${styles.scale__in__center}`}>
        {langs.map((lang) => (
          <div key={lang.lang} className={styles.item}>
            <Image src={lang.img} alt={lang.lang} />
            <h2>{lang.lang}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
