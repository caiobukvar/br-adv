import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Início</h1>
      <div className={styles.nav}>
        <a href="/quem-somos">Quem somos</a>
        <a href="/blog">Blog</a>
        <a href="/contato">Contato</a>
      </div>
    </main>
  );
}
