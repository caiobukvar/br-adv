"use client";
import Image from "next/image";
import Construction from "../../assets/images/construction/under-construction.svg";
import styles from "./styles.module.css";
import { Inter, Teko } from "next/font/google";
import { useTranslation } from "react-i18next";

const teko = Teko({ subsets: ["latin"] });

export default function UnderConstruction() {
  const { t } = useTranslation();

  return (
    <div className={teko.className}>
      <div className={styles.construction}>
        <Image src={Construction} alt="construction" />
        <h1>{t("construction.title")}!</h1>
      </div>
    </div>
  );
}
