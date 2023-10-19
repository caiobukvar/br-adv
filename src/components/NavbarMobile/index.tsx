"use client";

import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  DrawerFooter,
  RadioGroup,
  Stack,
  Tag,
  useDisclosure,
} from "@chakra-ui/react";
import i18n from "../../app/i18n";
import Image from "next/image";
import styles from "./styles.module.css";
import BR from "../../assets/images/official-pics/flags/BR.svg";
import FR from "../../assets/images/official-pics/flags/FR.svg";
import GE from "../../assets/images/official-pics/flags/GE.svg";
import SP from "../../assets/images/official-pics/flags/SP.svg";
import US from "../../assets/images/official-pics/flags/US.svg";
import BRAdvLogo from "../../assets/images/official-pics/bradv/logobradv.png";
import Socials from "../Socials";
import { HamburgerIcon } from "@chakra-ui/icons";
import Link from "next/link";
import SocialsInverted from "../SocialsInverted";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function NavbarMobile() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { t } = useTranslation();

  const handleChangeLanguage = (value: string) => {
    i18n.changeLanguage(value);
  };

  const onClickWithTimeout = () => {
    setTimeout(onClose, 200);
  };

  return (
    <div className={styles.container}>
      <Button colorScheme="blue" onClick={onOpen} backgroundColor="#1c244b">
        <HamburgerIcon color="#fff" />
      </Button>
      <Image src={BRAdvLogo} alt="logo" width={64} height={64} />

      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px" color="#1c244b" gap={10}>
            {t("home.header")}
          </DrawerHeader>
          <DrawerBody className={styles.content}>
            <div className={styles.nav}>
              <Link href="/" onClick={onClickWithTimeout}>
                {t("navbar.home")}
              </Link>
              <Link href="/quem-somos" onClick={onClickWithTimeout}>
                {t("navbar.about")}
              </Link>
              <Link href="/contato" onClick={onClickWithTimeout}>
                {t("navbar.contact")}
              </Link>
              <Link href="/blog" onClick={onClickWithTimeout}>
                {t("navbar.blog")}
              </Link>
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
              {/* <Tag borderRadius="full" variant="solid" colorScheme="red">
                Translations soon!
              </Tag> */}
            </div>
          </DrawerBody>

          <DrawerFooter
            borderTopWidth="1px"
            w="100%"
            justifyContent={"center"}
            bgColor="#1c244b"
          >
            <SocialsInverted />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
