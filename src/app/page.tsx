"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image from "next/image";
import styles from "./page.module.css";
import PicCarouselOffice from "@/components/PicCarouselOffice";
import WorkAreas from "@/components/WorkAreas";
import LangAdvice from "@/components/LangAdvice";
import OurServices from "@/components/OurServices";
import { useEffect } from "react";

export default function Home() {
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

            // Add a callback to remove the classnames after the animation is finished
            elementWithDataset.addEventListener("animationend", () => {
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

    const animateElements = document.querySelectorAll(`.${styles.animate}`);

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
        <div>
          <h1>Escritório de advocacia BR</h1>
          <div
            className={`${styles.s1__subtitle} ${styles.animate}`}
            data-animate={`${styles.animation__slide__bottom}`}
          >
            <h3>DIREITO IMOBILIÁRIO</h3>
            <button
              className="btn__blue"
              onClick={() => handleSaibaMaisClick()}
            >
              Saiba mais
            </button>
          </div>
        </div>
        <div className={styles.section__1__img}>
          <PicCarouselOffice />
        </div>
      </section>

      <section className={styles["section__2"]} id="section__2">
        <div className={styles.holder} />

        <div className={`${styles.section__container}`}>
          <h1>Dra. Bianca Rocha</h1>
          <span>
            <strong>Uma advogada apaixonada pela profissão.</strong>
          </span>

          <div
            className={`${styles.section__text} ${styles.animate}`}
            data-animate={`${styles.slide__in__from__right}`}
          >
            <p>Atuo com o mercado imobiliário de forma especializada.</p>
            <p>
              Me especializei em toda a parte jurídica que envolve os imóveis,
              principalmente em contratos e incorporação imobiliária.
            </p>
          </div>

          <a href="/quem-somos" className="btn__blue__nav">
            Quem é a Dra. Bianca Rocha
          </a>
        </div>
      </section>

      <section className={styles["section__3"]}>
        <div className={styles.sticky}>
          <h1>Nossas áreas de atuação</h1>
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
