import UnderConstruction from "@/components/UnderConstruction";
import styles from "./page.module.css";

export default function Blog() {
  return (
    <main className={styles.main}>
      <UnderConstruction />
      <div className={styles.nav}>
        <a href="/">Início</a>
        <a href="/quem-somos">Quem Somos</a>
        <a href="/contato">Contato</a>
      </div>
    </main>
  );
}
