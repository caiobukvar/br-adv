import Image from "next/image";
import styles from "./page.module.css";
import UnderConstruction from "@/components/UnderConstruction";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* <UnderConstruction /> */}
      <section className={styles["section__1"]}>
        <div>
          <h1>Escritório de advocacia BR</h1>
          <div className={styles["s1__subtitle"]}>
            <h3>DIREITO IMOBILIÁRIO</h3>
          </div>
          <button>Saiba mais</button>
        </div>
        <Image src="" alt="img-s1" width={400} height={400} />
      </section>
      
      <div className={styles.nav}>
        <a href="/">Início</a>
        <a href="/quem-somos">Quem somos</a>
        <a href="/contato">Contato</a>
        <a href="/blog">Blog</a>
      </div>
    </main>
  );
}
