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
import Socials from "../Socials";

export default function Navbar() {
  const pathname = usePathname();
  
  return (
    <div className={styles.container}>
      <div className={styles.content}>
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
          {/* <button>
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
          </button> */}
        </div>
      </div>
    </div>
  );
}
