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
import { HamburgerIcon } from "@chakra-ui/icons";
import Link from "next/link";
import SocialsInverted from "../SocialsInverted";

export default function NavbarMobile() {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
            Bianca Rocha Advocacia
          </DrawerHeader>
          <DrawerBody className={styles.content}>
            <div className={styles.nav}>
              <Link href="/" onClick={onClickWithTimeout}>
                Início
              </Link>
              <Link href="/quem-somos" onClick={onClickWithTimeout}>
                Quem Somos
              </Link>
              <Link href="/contato" onClick={onClickWithTimeout}>
                Contato
              </Link>
              <Link href="/blog" onClick={onClickWithTimeout}>
                Blog
              </Link>
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