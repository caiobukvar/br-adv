import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <p>Home</p>
      <a href="/quem-somos">Quem somos</a>
      <a href="/blog">Blog</a>
      <a href="/contato">Contato</a>
    </main>
  )
}
