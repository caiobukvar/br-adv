"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import styles from "./styles.module.css";
import { Icon } from "@chakra-ui/react";
import { MdOutlineWhatsapp } from "react-icons/md";
import { AiOutlineInstagram } from "react-icons/ai";
import {
  BsFillPersonFill,
  BsLinkedin,
  BsFacebook,
  BsFlag,
} from "react-icons/bs";
import Link from "next/link";

export default function Navbar() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.socials}>
          <Image src="" alt="" />
          <Link
            href="https://www.instagram.com/biancarocha.adv/"
            target="_blank"
          >
            <Icon as={AiOutlineInstagram} boxSize="24px" />
          </Link>
          <Link href="https://bianca500.jusbrasil.com.br/" target="_blank">
            <Icon as={BsFillPersonFill} boxSize="24px" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/bianca-rochav/"
            target="_blank"
          >
            <Icon as={BsLinkedin} boxSize="24px" />
          </Link>
          <Link
            href="https://www.facebook.com/biancarochav.adv"
            target="_blank"
          >
            <Icon as={BsFacebook} boxSize="24px" />
          </Link>
          <Link
            href="https://api.whatsapp.com/send?phone=5519999613496"
            target="_blank"
          >
            <Icon as={MdOutlineWhatsapp} boxSize="24px" />
          </Link>
        </div>

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
          <button>
            <Icon as={BsFlag} boxSize="24px" />
          </button>
          <button>
            <Icon as={BsFlag} boxSize="24px" />
          </button>
          <button>
            <Icon as={BsFlag} boxSize="24px" />
          </button>
          <button>
            <Icon as={BsFlag} boxSize="24px" />
          </button>
          <button>
            <Icon as={BsFlag} boxSize="24px" />
          </button>
        </div>
      </div>
    </div>
  );
}
