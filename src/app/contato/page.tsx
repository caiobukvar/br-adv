"use client";
/* eslint-disable react/no-children-prop */
import Maps from "@/components/Maps";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../app/i18n";
import styles from "./page.module.css";

export default function Contato() {
  const { t } = useTranslation();

  const [language, setLanguage] = useState(i18n.language);

  return (
    <main className={styles.main}>
      <div className={styles.form}>
        <Stack spacing={4} className={styles.form__content}>
          <div className={styles.floating__header}>
            <h1>{t("contact.form_title")}</h1>
          </div>
          <FormControl isRequired>
            <FormLabel htmlFor="name">{t("contact.form_name")}</FormLabel>
            <Input
              placeholder={t("contact.form_name_ph")}
              name="name"
              variant="flushed"
            />
          </FormControl>

          <Stack direction={["column", "column", "row"]} w="100%">
            <FormControl isRequired>
              <FormLabel htmlFor="phone">{t("contact.form_phone")}</FormLabel>
              <InputGroup id="phone">
                <InputLeftAddon
                  children="+55"
                  bgColor="#1c244b"
                  color="#fff"
                  fontWeight={500}
                  border="1px solid #1c244b"
                />
                <Input
                  type="tel"
                  placeholder={t("contact.form_phone_ph")}
                  name="phone"
                  variant="flushed"
                  className={styles.phone}
                />
              </InputGroup>
            </FormControl>

            <FormControl isRequired>
              <FormLabel htmlFor="email">{t("contact.form_email")}</FormLabel>
              <InputGroup id="email">
                <Input
                  name="email"
                  placeholder={t("contact.form_email_ph")}
                  variant="flushed"
                />
              </InputGroup>
            </FormControl>
          </Stack>

          <FormControl isRequired>
            <FormLabel htmlFor="business">
              {t("contact.form_business")}
            </FormLabel>
            <InputGroup id="business">
              <Textarea
                name="business"
                placeholder={t("contact.form_business_ph")}
                variant="flushed"
              />
            </InputGroup>
          </FormControl>

          <Button
            size="md"
            bgColor="#00B60B"
            color="#fff"
            _hover={{ backgroundColor: "#65c56b" }}
          >
            {t("contact.send")}
          </Button>
        </Stack>
      </div>
      <Stack
        direction={["column", "column", "row"]}
        className={styles.contact}
        spacing={10}
      >
        <p>{t("contact.service")}: +55 (19) 9 9961.3496 </p>
      </Stack>
      <Maps />
    </main>
  );
}
