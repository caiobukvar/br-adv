import { cache } from 'react';
import 'server-only';

import blogPosts from "@/blogPosts.json";

export type PostData = {
  id: number;
  title: string;
  paragraphs: { id: number; paragraph: string }[];
};

export const revalidate = 1800; //caches requests for 30min

export const getPosts = async () => {
  const posts: PostData[] = blogPosts;

  return posts;
}

export const getPost = cache(async (postId: number) => {
  const post: PostData | undefined = blogPosts.find(
    (post) => post.id === postId,
  );

  return post;
});