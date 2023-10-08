/* eslint-disable react/no-children-prop */
import styles from "./page.module.css";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Stack,
  Textarea,
  background,
} from "@chakra-ui/react";

export default function Contato() {
  return (
    <main className={styles.main}>
      <div className={styles.form}>
        <Stack spacing={4} className={styles.form__content}>
          <div className={styles.floating__header}>
            <h1>Contato</h1>
          </div>
          <FormControl isRequired>
            <FormLabel htmlFor="name">Nome</FormLabel>
            <Input
              placeholder="Insira seu nome"
              name="name"
              variant="flushed"
            />
          </FormControl>

          <Stack direction={["column", "column", "row"]} w="100%">
            <FormControl isRequired>
              <FormLabel htmlFor="phone">Telefone/Whatsapp</FormLabel>
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
                  placeholder="Insira seu telefone"
                  name="phone"
                  variant="flushed"
                  className={styles.phone}
                />
              </InputGroup>
            </FormControl>

            <FormControl isRequired>
              <FormLabel htmlFor="email">E-mail</FormLabel>
              <InputGroup id="email">
                <Input
                  name="email"
                  placeholder="Insira seu e-mail"
                  variant="flushed"
                />
              </InputGroup>
            </FormControl>
          </Stack>

          <FormControl isRequired>
            <FormLabel htmlFor="business">Assunto</FormLabel>
            <InputGroup id="business">
              <Textarea
                name="business"
                placeholder="Insira o motivo de contato"
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
            Enviar
          </Button>
        </Stack>
      </div>
      <Stack
        direction={["column", "column", "row"]}
        className={styles.contact}
        spacing={10}
      >
        <p>Atendimento: (19) 9 9961.3496 </p>
      </Stack>
    </main>
  );
}
