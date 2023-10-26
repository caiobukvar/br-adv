import styles from "./styles.module.css";
import blogPosts from "../../blogPosts.json";
import Link from "next/link";
import { VStack } from "@chakra-ui/react";
import { Wrap, WrapItem } from "@chakra-ui/react";

export default function BlogPosts() {
  return (
    <Wrap className={styles.container} spacing={5}>
      {blogPosts.map((post) => {
        return (
          <WrapItem key={post.id} className={styles.card}>
            <VStack as="button" className={styles.card__container}>
              <h1>{post.title}</h1>
              <Link href={`/blog/${post.id}`}>Leia mais</Link>
            </VStack>
            <div className={styles.footer}>
              <span>Data</span> - <span>Número de comentários</span>
            </div>
          </WrapItem>
        );
      })}
    </Wrap>
  );
}
