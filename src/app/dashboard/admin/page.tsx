"use client";
import RootLayout from "@/app/layout";
import Posts from "@/components/Posts";
import { Button, HStack, Stack, Text, VStack } from "@chakra-ui/react";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { useState } from "react";
import styles from "./page.module.css";
import { NewPost } from "@/components/NewPost";

const Admin = () => {
  const { isAuthenticated, isLoading } = useKindeBrowserClient();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  if (isLoading) return <div className={styles.loading}>Loading...</div>;

  return isAuthenticated ? (
    <RootLayout isDashboardRoute={true}>
      <main className={styles.main}>
        <VStack
          w="100%"
          alignItems="center"
          p={10}
          minH="calc(100vh - 140px)"
          background="#00009920"
        >
          <HStack w="100%" justifyContent="flex-end">
            <Stack direction={["column", "column", "row", "row"]} spacing={5}>
              <Button
                colorScheme="blue"
                p="10px"
                minW="100px"
                fontWeight={600}
                h="44px"
                onClick={handleOpenModal}
              >
                Novo post
              </Button>
              <LogoutLink className={styles.logout}>Fazer logout</LogoutLink>
              <NewPost isOpen={isModalOpen} onClose={handleCloseModal} />
            </Stack>
          </HStack>
          <Posts />
        </VStack>
      </main>
    </RootLayout>
  ) : (
    <VStack w="100%" alignItems="center" p={10}>
      <Text> Você precisa fazer login para ver esta página.</Text>

      <LoginLink className={styles.login}>Fazer login</LoginLink>
    </VStack>
  );
};

export default Admin;
