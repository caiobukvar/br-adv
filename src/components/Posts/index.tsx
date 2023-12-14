import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  HStack,
  Heading,
  Text,
} from "@chakra-ui/react";

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
          <Card align="center" key={post.title} w="100%">
            <CardHeader alignSelf="flex-start" w="100%">
              <HStack w="100%" justifyContent="space-between">
                <Heading size="md">{post.title}</Heading>
                <Button colorScheme="blue">Ver post</Button>
              </HStack>
            </CardHeader>
            <CardBody w="100%">
              <HStack w="100%" justifyContent="space-between">
                <Text color="black">
                  {post.text.map((paragraph, index) => (
                    <span key={index}>
                      {Object.values(paragraph)[0]}
                      <br />
                    </span>
                  ))}
                </Text>
              </HStack>
            </CardBody>
          </Card>
        ))}
    </>
  );
}
