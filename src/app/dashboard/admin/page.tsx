"use client";
import { Button, HStack, Heading, Stack, Text, VStack } from "@chakra-ui/react";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import styles from "./page.module.css";
import Posts from "@/components/Posts";
import RootLayout from "@/app/layout";

const Admin = () => {
  const { isAuthenticated, isLoading } = useKindeBrowserClient();

  if (isLoading) return <div className={styles.loading}>Loading...</div>;

  return isAuthenticated ? (
    <RootLayout isDashboardRoute={true}>
      <main className={styles.main}>
        <VStack w="100%" alignItems="center" p={10} minH="calc(100vh - 310px)">
          <HStack w="100%" justifyContent="flex-end">
            <Stack direction={["column", "column", "row", "row"]} spacing={5}>
              <Button
                colorScheme="blue"
                p="10px"
                minW="100px"
                fontWeight={600}
                h="44px"
              >
                Novo post
              </Button>
              <LogoutLink className={styles.logout}>Fazer logout</LogoutLink>
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
