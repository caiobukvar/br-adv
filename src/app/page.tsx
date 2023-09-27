import styles from "./page.module.css";
import UnderConstruction from "@/components/UnderConstruction";

export default function Home() {
  return (
    <main className={styles.main}>
      <UnderConstruction />
      <div className={styles.nav}>
        <a href="/">Início</a>
        <a href="/quem-somos">Quem somos</a>
        <a href="/contato">Contato</a>
        <a href="/blog">Blog</a>
      </div>
    </main>
  );
}
