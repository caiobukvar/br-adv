import styles from "./styles.module.css";
import blogPosts from "../../blogPosts.json";
import Link from "next/link";
import { VStack } from "@chakra-ui/react";

export default function BlogPosts() {
  return (
    <div className={styles.container}>
      {blogPosts.map((post) => {
        return (
          <div key={post.id} className={styles.card}>
            <VStack as="button" className={styles.card__container}>
              <h1>{post.title}</h1>
              <Link href="">Leia mais</Link>
            </VStack>
            <div className={styles.footer}>
              <span>Data</span> - <span>Número de comentários</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
