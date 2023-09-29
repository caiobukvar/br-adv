import Image from "next/image";
import styles from "./styles.module.css";

const langs = [
  { lang: "Português", img: "" },
  { lang: "Inglês", img: "" },
  { lang: "Alemão", img: "" },
  { lang: "Espanhol", img: "" },
  { lang: "Francês", img: "" },
];

export default function LangAdvice() {
  return (
    <div className={styles.container}>
      {langs.map((lang) => (
        <div key={lang.lang} className={styles.item}>
          <Image src={lang.img} alt={lang.lang} />
          <h1>{lang.lang}</h1>
        </div>
      ))}
    </div>
  );
}
