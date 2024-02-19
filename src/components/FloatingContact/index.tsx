"use client";
import { Icon } from "@chakra-ui/react";
import Link from "next/link";
import { MdOutlineWhatsapp } from "react-icons/md";
import styles from "./style.module.css";

export default function FloatingContact() {
  return (
    <Link
      target="_blank"
      href="https://api.whatsapp.com/send?phone=9999999999999&text=Ol%C3%A1,%20gostaria%20de%20maiores%20informa%C3%A7%C3%B5es"
      className={`${styles.whatsapp} ${styles.slide__in__fwd__bottom}`}
    >
      <Icon as={MdOutlineWhatsapp} boxSize="32px" color="#fff" />
    </Link>
  );
}
