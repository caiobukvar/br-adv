"use client";

import { ChakraProvider } from "@chakra-ui/react";

export function Chakra({ children }: { children: React.ReactNode }) {
  return <ChakraProvider>{children}</ChakraProvider>;
}
