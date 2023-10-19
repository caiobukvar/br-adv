"use client";
import OurServices from "@/components/OurServices";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../app/i18n";
import styles from "./page.module.css";

export default function QuemSomos() {
  const { t } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

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
      <section className={styles.section__1}>
        <div className={styles.mask} />
        <div className={styles.background}>
          <div className={styles.content}>
            <h1>{t("about.title")}</h1>
            <p>{t("about.text")}</p>
            <p>{t("about.text2")}</p>
            <p>{t("about.text3")}</p>
            <p>{t("about.text4")}</p>
            <p>{t("about.text5")}</p>
            <p>{t("about.text6")}</p>
            <p>{t("about.text7")}</p>
          </div>
          <div className={styles.content__channels}>
            <h3>{t("about.content_title")}</h3>

            <div>
              <Link href="https://bianca500.jusbrasil.com.br" target="_blank">
                Jusbrasil
              </Link>

              <Link
                href="https://api.whatsapp.com/send?phone=5519999613496"
                target="_blank"
              >
                Whatsapp
              </Link>

              <Link
                href="https://www.facebook.com/biancarochav.adv"
                target="_blank"
              >
                Facebook
              </Link>

              <Link
                href="https://www.instagram.com/biancarocha.adv "
                target="_blank"
              >
                Instagram
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section__2}>
        <div className={styles.container}>
          <div
            className={`${styles.text__container} ${styles.animate}`}
            data-animate={`${styles.animation__text__focus__in}`}
          >
            <h1>{t("about.s2_title")}</h1>
            <p
              className={`${styles.text} ${styles.animate}`}
              data-animate={`${styles.animation__slide__bottom}`}
            >
              {t("about.s2_text")}
            </p>
          </div>
          <div className={styles.image} />
        </div>
      </section>

      <section className={styles.section__3}>
        <OurServices />
      </section>
    </main>
  );
}
