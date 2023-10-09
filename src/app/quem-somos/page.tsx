import UnderConstruction from "@/components/UnderConstruction";
import styles from "./page.module.css";
import Link from "next/link";

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
              <Link href="">Jusbrasil</Link>

              <Link href="">Whatsapp</Link>

              <Link href="">Facebook</Link>

              <Link href="">Instagram</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
