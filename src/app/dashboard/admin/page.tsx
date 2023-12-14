"use client";
import { Button, Heading, Text, VStack } from "@chakra-ui/react";
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
        <Heading>Você está logado!</Heading>

        {/* 
        espaço deve conter:
        - lista de post no blog
        - criar novo post e salvar no db e já postar
        - editar um post (?)
        - deletar um post listado
        - botão logout
        */}

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
