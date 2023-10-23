"use client";
import LangAdvice from "@/components/LangAdvice";
import OurServices from "@/components/OurServices";
import PicCarouselOffice from "@/components/PicCarouselOffice";
import WorkAreas from "@/components/WorkAreas";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./i18n";
import styles from "./page.module.css";

export default function Home() {
  const { t } = useTranslation();

  const handleSaibaMaisClick = () => {
    const element = document.getElementById("section__2");

    element!.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const animationObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const element = entry.target;
          const elementWithDataset = element as Element & { dataset: any };
          const animationClassname = elementWithDataset.dataset.animate;

          if (entry.isIntersecting && !elementWithDataset.dataset.animated) {
            elementWithDataset.classList.add(animationClassname);
            elementWithDataset.classList.add("animated");

            element.addEventListener("animationend", () => {
              elementWithDataset.classList.remove(animationClassname);
              elementWithDataset.classList.remove("animated");
              elementWithDataset.dataset.animated = true;
            });
          }
        });
      },
      {
        threshold: 0,
      },
    );

    const animateElements = document.querySelectorAll(styles.animate);

    animateElements.forEach((element) => {
      animationObserver.observe(element);
    });

    return () => {
      animationObserver.disconnect();
    };
  }, []);

  return (
    <main className={styles.main}>
      <section
        className={`${styles.section__1} ${styles.animate}`}
        data-animate={`${styles.animation__text__focus}`}
      >
        <div className={styles.container}>
          <h1>{t("home.header")}</h1>
          <div
            className={`${styles.s1__subtitle} ${styles.animate}`}
            data-animate={`${styles.animation__slide__bottom}`}
          >
            <h3>{t("home.title")}</h3>
            <button
              className="btn__blue"
              onClick={() => handleSaibaMaisClick()}
            >
              {t("home.saiba_mais")}
            </button>
          </div>
        </div>
        <div className={styles.section__1__img}>
          <PicCarouselOffice />
        </div>
      </section>

      <section className={styles.section__2} id="section__2">
        <div className={styles.holder} />

        <div className={`${styles.section__container}`}>
          <h1>{t("home.s2_title")}</h1>
          <span>
            <strong>{t("home.s2_subtitle")}</strong>
          </span>

          <div
            className={`${styles.section__text} ${styles.animate}`}
            data-animate={`${styles.animation__slide__bottom}`}
          >
            <p>{t("home.s2_text")}</p>
            <p>{t("home.s2_text2")}</p>
          </div>

          <a href="/quem-somos" className="btn__blue__nav">
            {t("home.s2_button")}
          </a>
        </div>
      </section>

      <section
        className={`${styles.section__3} ${styles.animate}`}
        data-animate={`${styles.animation__scale__in__center}`}
      >
        <div className={styles.sticky}>
          <h1>{t("areas.s3_title")}</h1>
        </div>
        <WorkAreas />
      </section>

      <section className={styles["section__4"]}>
        <LangAdvice />
      </section>

      <section className={styles["section__5"]}>
        <OurServices />
      </section>
    </main>
  );
}
