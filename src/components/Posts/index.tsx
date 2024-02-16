import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  HStack,
  Heading,
  Icon,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";
import styles from "./styles.module.css";

type Paragraph =
  | {
      p1: string;
    }
  | {
      p2?: string;
    }
  | {
      p3?: string;
    }
  | {
      p4?: string;
    };

type Post = {
  id: number;
  title: string;
  text: Paragraph[];
  active: boolean;
};

type Posts = Post[];

const posts: Posts = [
  {
    id: 0,
    title: "Titulo 1",
    active: true,
    text: [{ p1: "Paragrafo 1" }, { p2: "Paragrafo 2" }],
  },
  {
    id: 1,
    title: "Titulo 2",
    active: true,
    text: [{ p1: "Paragrafo 1" }, { p2: "Paragrafo 2" }, { p3: "Paragrafo 3" }],
  },
];

export default function Posts() {
  return (
    <>
      {posts
        .filter((post) => post.active)
        .map((post) => (
          <Card as="button" key={post.title} className={styles.title}>
            <CardHeader alignSelf="flex-start" w="100%">
              <HStack w="100%" justifyContent="space-between">
                <Heading size="md">{post.title}</Heading>
                <HStack>
                  <Button colorScheme="blue">Ver post</Button>
                  <Box as="button" className={styles.delete}>
                    <Center h="100%">
                      <Icon as={FaTrash} size="32px" />
                    </Center>
                  </Box>
                </HStack>
              </HStack>
            </CardHeader>
          </Card>
        ))}
      Paginação aqui
    </>
  );
}
