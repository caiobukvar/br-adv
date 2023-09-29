import Image from "next/image";
import styles from "./styles.module.css";
import PT from "../../assets/images/official-pics/assessoria/portugues.png";
import EN from "../../assets/images/official-pics/assessoria/ingles.jpg";
import GE from "../../assets/images/official-pics/assessoria/alemao.jpg";
import ES from "../../assets/images/official-pics/assessoria/espanhol.jpg";
import FN from "../../assets/images/official-pics/assessoria/frances.jpg";

const langs = [
  { lang: "Português", img: PT },
  { lang: "Inglês", img: EN },
  { lang: "Alemão", img: GE },
  { lang: "Espanhol", img: ES },
  { lang: "Francês", img: FN },
];

export default function LangAdvice() {
  return (
    <div className={styles.container}>
      <h1>Assessoria de idiomas</h1>
      <div className={styles.content}>
        {langs.map((lang) => (
          <div key={lang.lang} className={styles.item}>
            <Image src={lang.img} alt={lang.lang} />
            <h2>{lang.lang}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
