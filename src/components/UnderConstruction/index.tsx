import Image from "next/image";
import Construction from "../../assets/images/construction/under-construction.svg";
import styles from "./styles.module.css";
import { Inter, Teko } from "next/font/google";
const teko = Teko({ subsets: ["latin"] });

export default function UnderConstruction() {
  return (
    <div className={teko.className}>
      <div className={styles.construction}>
        <Image src={Construction} alt="construction" />
        <h1>Página em construção!</h1>
      </div>
    </div>
  );
}
