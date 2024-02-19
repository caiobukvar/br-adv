"use client";

import { VStack, Wrap, WrapItem } from "@chakra-ui/react";
import Link from "next/link";

import { type PostData } from "@/services/posts";

import styles from "./styles.module.css";

export const PostNotFound = () => {
  return (
    <div>
      <span>Post não encontrado.</span>
    </div>
  );
};

type Props = {
  posts: PostData[];
};

const BlogPosts: React.FC<Props> = ({ posts }) => {
  return (
    <Wrap className={styles.container} spacing={5}>
      {posts.map((post) => {
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
};

export default BlogPosts;
