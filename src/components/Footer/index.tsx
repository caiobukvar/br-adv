import Socials from "../Socials";
import styles from "./styles.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Socials />
        <div className={styles.blank} />
        <div className={styles.address}>
          <p>R. Argolino de Moraes, 87</p>
          <p>Vila São Francisco - Hortolândia - SP</p>
          <p>CEP: 13184-230</p>
          <Link href='/politica-de-privacidade'>Política de Privacidade</Link>
        </div>
      </div>
    </div>
  );
}
