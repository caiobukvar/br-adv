import { Heading, VStack } from "@chakra-ui/react";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import styles from "./styles.module.css";

export default function LoginScreen() {
  return (
    <VStack
      p={20}
      alignItems="center"
      justifyContent="center"
      alignSelf="center"
      spacing={10}
      backgroundColor="#1c244b"
      color="#fff"
      borderRadius={[0, 0, 0, 7]}
    >
      <Heading textAlign="center">
        Para visualizar o dashboard, favor realize login
      </Heading>
      <LoginLink
        className={styles.login}
        postLoginRedirectURL="/dashboard/admin"
      >
        Entrar
      </LoginLink>
    </VStack>
  );
}
