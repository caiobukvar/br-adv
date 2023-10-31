"use client";
/* eslint-disable react/no-children-prop */
import Maps from "@/components/Maps";
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import styles from "./page.module.css";
import { useState } from "react";

type OnBlurEvent = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
) => void;

const initValues = {
  name: "",
  phone: "",
  email: "",
  message: "",
};

const initState = {
  values: initValues,
  isLoading: false,
};

export default function Contato() {
  const { t } = useTranslation();
  const [contactData, setContactData] = useState(initState);
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});

  const { values, isLoading } = contactData;

  //! this function changes de initState value, not state itself!
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) =>
    setContactData((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [event.target.name]: event.target.value,
      },
    }));

  //! this function says if input has been touched or not, for error handling
  const onBlur: OnBlurEvent = ({ target }) =>
    setTouched((prev) => ({ ...prev, [target.name]: true }));

  const onSubmit = async () => {
    setContactData((prev) => ({
      ...prev,
      isLoading: true,
    }));

    // * api call here

    setContactData((prev) => ({
      ...prev,
      isLoading: false,
    }));
  };

  return (
    <main className={styles.main}>
      <div className={styles.form}>
        <Stack spacing={4} className={styles.form__content}>
          <div className={styles.floating__header}>
            <h1>{t("contact.form_title")}</h1>
          </div>

          <FormControl isRequired isInvalid={touched.name && !values.name}>
            <FormLabel htmlFor="name">{t("contact.form_name")}</FormLabel>
            <Input
              placeholder={t("contact.form_name_ph")}
              name="name"
              variant="flushed"
              errorBorderColor="red.300"
              value={values.name}
              onChange={handleChange}
              onBlur={onBlur}
            />
            <FormErrorMessage>{t("contact.error")}</FormErrorMessage>
          </FormControl>

          <Stack direction={["column", "column", "row"]} w="100%">
            <FormControl isRequired isInvalid={touched.phone && !values.phone}>
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
                  errorBorderColor="red.300"
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={onBlur}
                />
              </InputGroup>
              <FormErrorMessage>{t("contact.error")}</FormErrorMessage>
            </FormControl>

            <FormControl isRequired isInvalid={touched.email && !values.email}>
              <FormLabel htmlFor="email">{t("contact.form_email")}</FormLabel>
              <Input
                name="email"
                placeholder={t("contact.form_email_ph")}
                variant="flushed"
                errorBorderColor="red.300"
                value={values.email}
                onChange={handleChange}
                onBlur={onBlur}
              />
              <FormErrorMessage>{t("contact.error")}</FormErrorMessage>
            </FormControl>
          </Stack>

          <FormControl
            isRequired
            isInvalid={touched.message && !values.message}
          >
            <FormLabel htmlFor="message">{t("contact.form_message")}</FormLabel>
            <Textarea
              name="message"
              placeholder={t("contact.form_message_ph")}
              variant="flushed"
              errorBorderColor="red.300"
              value={values.message}
              onChange={handleChange}
              onBlur={onBlur}
            />
            <FormErrorMessage>{t("contact.error")}</FormErrorMessage>
          </FormControl>

          <Button
            size="md"
            variant="solid"
            bgColor="#00B60B"
            color="#fff"
            _hover={{ backgroundColor: "#65c56b" }}
            _disabled={{
              bgColor: "gray",
            }}
            isDisabled={
              !values.name || !values.phone || !values.email || !values.message
            }
            onClick={onSubmit}
            isLoading={isLoading}
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
      <br />
    </main>
  );
}
