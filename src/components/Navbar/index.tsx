"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import i18n from "../../app/i18n";
import styles from "./styles.module.css";
import BR from "../../assets/images/official-pics/flags/BR.svg";
import FR from "../../assets/images/official-pics/flags/FR.svg";
import GE from "../../assets/images/official-pics/flags/GE.svg";
import SP from "../../assets/images/official-pics/flags/SP.svg";
import US from "../../assets/images/official-pics/flags/US.svg";
import BRAdvLogo from "../../assets/images/official-pics/bradv/logobradv.png";
import Socials from "../Socials";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t } = useTranslation();
  const pathname = usePathname();

  const handleChangeLanguage = (value: string) => {
    i18n.changeLanguage(value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Image src={BRAdvLogo} alt="logo" width={64} height={64} />
        <Socials />

        <div className={styles.nav}>
          <a className={pathname === "/" ? styles.active : ""} href="/">
            {t("navbar.home")}
          </a>
          <a
            className={pathname === "/quem-somos" ? styles.active : ""}
            href="/quem-somos"
          >
            {t("navbar.about")}
          </a>
          <a
            className={pathname === "/contato" ? styles.active : ""}
            href="/contato"
          >
            {t("navbar.contact")}
          </a>
          <a className={pathname === "/blog" ? styles.active : ""} href="/blog">
            {t("navbar.blog")}
          </a>
        </div>

        <div className={styles.available__languages}>
          <div>
            <button onClick={() => handleChangeLanguage("pt")}>
              <Image src={BR} alt="Brazil" />
            </button>
            <button onClick={() => handleChangeLanguage("en")}>
              <Image src={US} alt="United States" />
            </button>
            <button onClick={() => handleChangeLanguage("fr")}>
              <Image src={FR} alt="France" />
            </button>
            <button onClick={() => handleChangeLanguage("de")}>
              <Image src={GE} alt="Germany" />
            </button>
            <button onClick={() => handleChangeLanguage("es")}>
              <Image src={SP} alt="Spain" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
