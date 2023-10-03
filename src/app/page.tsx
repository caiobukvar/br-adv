"use client";
import Image from "next/image";
import styles from "./page.module.css";
import UnderConstruction from "@/components/UnderConstruction";
import PicCarousel from "@/components/PicCarousel";
import WorkAreas from "@/components/WorkAreas";
import LangAdvice from "@/components/LangAdvice";
import OurServices from "@/components/OurServices";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  const handleSaibaMaisClick = () => {
    const element = document.getElementById("section__2");

    element!.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className={styles.main}>
      <div className={styles.nav}>
        <a href="/">Início</a>
        <a href="/quem-somos">Quem somos</a>
        <a href="/contato">Contato</a>
        <a href="/blog">Blog</a>
      </div>

      <section className={styles["section__1"]}>
        <div>
          <h1>Escritório de advocacia BR</h1>
          <div className={styles["s1__subtitle"]}>
            <h3>DIREITO IMOBILIÁRIO</h3>
          </div>
          <button className="btn__blue" onClick={() => handleSaibaMaisClick()}>
            Saiba mais
          </button>
        </div>
        <div>
          <PicCarousel />
        </div>
      </section>

      <section className={styles["section__2"]} id="section__2">
        <Image src="" alt="img-s2" width={450} height={450} />
        <div>
          <h1>Dra. Bianca Rocha</h1>
          <span>
            <strong>Uma advogada apaixonada pela profissão.</strong>
          </span>
          <div>
            <p>Atuo com o mercado imobiliário de forma especializada.</p>
            <p>
              Me especializei em toda a parte jurídica que envolve os imóveis,
              principalmente em contratos e incorporação imobiliária.
            </p>
          </div>
          <button className="btn__blue">Quem é a Dra. Bianca Rocha</button>
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
