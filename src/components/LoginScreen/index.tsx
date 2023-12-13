import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  VStack,
} from "@chakra-ui/react";

export default function LoginScreen() {
  return (
    <VStack
      p={10}
      alignItems="center"
      justifyContent="space-between"
      borderRadius={7}
      border="1px solid black"
      backgroundColor="#1c244b"
      color="#fff"
    >
      <Heading marginBottom={5}>Login</Heading>

      <FormControl>
        <FormLabel fontWeight="bold">Nome de usuário</FormLabel>
        <Input placeholder="Insira seu nome de usuário" name="username" />
        <FormErrorMessage>Erro</FormErrorMessage>
      </FormControl>

      <FormControl>
        <FormLabel fontWeight="bold">Senha</FormLabel>
        <Input placeholder="Insira sua senha" name="password" />
        <FormErrorMessage>Erro</FormErrorMessage>
      </FormControl>

      <Button marginTop={5}>Entrar</Button>
    </VStack>
  );
}
