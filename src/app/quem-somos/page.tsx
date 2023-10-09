import UnderConstruction from "@/components/UnderConstruction";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import OurServices from "@/components/OurServices";

export default function QuemSomos() {
  return (
    <main className={styles.main}>
      <section className={styles.section__1}>
        <div className={styles.mask} />
        <div className={styles.background}>
          <div className={styles.content}>
            <h1>Dra. Bianca Rocha</h1>
            <p>Especialista em Direito Imobiliário.</p>
            <p>Sou uma advogada apaixonada pela profissão.</p>
            <p>Atuo com o mercado imobiliário de forma especializada.</p>
            <p>
              Me especializei em toda a parte jurídica envolvendo imóveis,
              principalmente em contratos e incorporação imobiliária
            </p>
            <p>
              Me formei pela Universiade Salesiana de São Paulo, com pós em
              Direito Imobiliário, com diversos cursos de extensão jurídicos.
            </p>
            <p>
              Tive o privilégio de trabalhar internacionalmente como estagiária
              na <strong>Organização dos Estados Americanos</strong> e na{" "}
              <strong>ONU-CEPAL</strong>.
            </p>
            <p>
              Sou sócia-propietária do escritório{" "}
              <strong>Bianca Rocha Advocacia</strong>, em{" "}
              <strong>Hortolândia/SP</strong>, com atuação em todo o Brasil.
            </p>
          </div>
          <div className={styles.content__channels}>
            <h3>Conheça meus canais de conteúdo:</h3>

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
          <div className={styles.text__container}>
            <h1>Práticas de Bianca Rocha Advocacia</h1>
            <p>
              Nossos advogados dedicados trazem uma abordagem única para todos
              os casos. Hoje, trabalhamos com uma série de regulamentos e
              requisistos. Confira nossas áreas de especialização e ligue para
              falar sobre suas questões legais hoje mesmo!
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
