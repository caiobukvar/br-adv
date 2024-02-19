"use client";

import Link from "next/link";
import { Button, Tooltip, VStack } from "@chakra-ui/react";
import { Wrap, WrapItem } from "@chakra-ui/react";

import { type PostData } from "@/services/posts";

import styles from "./styles.module.css";
// import { LoginLink } from "@kinde-oss/kinde-auth-nextjs";

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
    <>
      {/* <Tooltip
        label="Área restrita para administradores!"
        aria-label="admin-only"
        placement="auto"
        hasArrow
      >
        <Button alignSelf="flex-end" colorScheme="blue">
          <LoginLink className={styles.login}>🔒 Dashboard</LoginLink>
        </Button>
      </Tooltip> */}

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
    </>
  );
};

export default BlogPosts;
