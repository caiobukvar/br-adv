"use client";
import { Button, Text, VStack } from "@chakra-ui/react";
import styles from "./page.module.css";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

const Admin = () => {
  const { isAuthenticated, isLoading } = useKindeBrowserClient();

  if (isLoading) return <div className={styles.loading}>Loading...</div>;

  return isAuthenticated ? (
    <main className={styles.main}>
      <VStack
        w="100%"
        alignItems="center"
        p={10}
        minH="calc(100vh - 310px)"
        justifyContent="center"
        spacing={10}
      >
        <Text>Você está logado!</Text>
        <LogoutLink className={styles.logout}>Fazer logout</LogoutLink>
      </VStack>
    </main>
  ) : (
    <VStack w="100%" alignItems="center" p={10}>
      <Text> Você precisa fazer login para ver esta página.</Text>

      <LoginLink className={styles.login}>Fazer login</LoginLink>
    </VStack>
  );
  return;
};

export default Admin;
