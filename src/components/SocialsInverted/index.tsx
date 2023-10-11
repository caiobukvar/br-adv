"use client";
import Image from "next/image";
import styles from "./styles.module.css";
import { Icon } from "@chakra-ui/react";
import { MdOutlineWhatsapp } from "react-icons/md";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsFillPersonFill, BsLinkedin, BsFacebook } from "react-icons/bs";
import Link from "next/link";

export default function SocialsInverted() {
  return (
    <div className={styles.socials}>
      {/* <Image src="" alt="logo" /> */}
      <Link href="https://www.instagram.com/biancarocha.adv/" target="_blank">
        <Icon as={AiOutlineInstagram} boxSize="24px" />
      </Link>
      <Link href="https://bianca500.jusbrasil.com.br/" target="_blank">
        <Icon as={BsFillPersonFill} boxSize="24px" />
      </Link>
      <Link href="https://www.linkedin.com/in/bianca-rochav/" target="_blank">
        <Icon as={BsLinkedin} boxSize="24px" />
      </Link>
      <Link href="https://www.facebook.com/biancarochav.adv" target="_blank">
        <Icon as={BsFacebook} boxSize="24px" />
      </Link>
      <Link
        href="https://api.whatsapp.com/send?phone=5519999613496"
        target="_blank"
      >
        <Icon as={MdOutlineWhatsapp} boxSize="24px" />
      </Link>
    </div>
  );
}
