"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import styles from "./styles.module.css";
import BR from "../../assets/images/official-pics/flags/BR.svg";
import FR from "../../assets/images/official-pics/flags/FR.svg";
import GE from "../../assets/images/official-pics/flags/GE.svg";
import SP from "../../assets/images/official-pics/flags/SP.svg";
import US from "../../assets/images/official-pics/flags/US.svg";
import BRAdvLogo from "../../assets/images/official-pics/bradv/logobradv.png";
import Socials from "../Socials";
import { Tag } from "@chakra-ui/react";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Image src={BRAdvLogo} alt="logo" width={64} height={64} />
        <Socials />

        <div className={styles.nav}>
          <a className={pathname === "/" ? styles.active : ""} href="/">
            Início
          </a>
          <a
            className={pathname === "/quem-somos" ? styles.active : ""}
            href="/quem-somos"
          >
            Quem somos
          </a>
          <a
            className={pathname === "/contato" ? styles.active : ""}
            href="/contato"
          >
            Contato
          </a>
          <a className={pathname === "/blog" ? styles.active : ""} href="/blog">
            Blog
          </a>
        </div>

        <div className={styles.available__languages}>
          <div>
            <button>
              <Image src={US} alt="United States" />
            </button>
            <button>
              <Image src={FR} alt="France" />
            </button>
            <button>
              <Image src={GE} alt="Germany" />
            </button>
            <button>
              <Image src={BR} alt="Brazil" />
            </button>
            <button>
              <Image src={SP} alt="Spain" />
            </button>
          </div>
          <Tag borderRadius="full" variant="solid" colorScheme="red">
            Translations soon!
          </Tag>
        </div>
      </div>
    </div>
  );
}
