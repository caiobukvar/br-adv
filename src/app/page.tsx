import styles from "./page.module.css";
import Construction from "../assets/images/construction/under-construction.svg";
import Image from "next/image";
import UnderConstruction from "@/components/UnderConstruction";

export default function Home() {
  return (
    <main className={styles.main}>
      <UnderConstruction />
      <div className={styles.nav}>
        <a href="/quem-somos">Quem somos</a>
        <a href="/contato">Contato</a>
        <a href="/blog">Blog</a>
      </div>
    </main>
  );
}
