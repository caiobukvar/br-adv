import { getPosts } from "@/services/posts";
import BlogPosts from "@/components/BlogPosts";

import styles from "./page.module.css";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs";

const getData = async () => {
  const response = await getPosts();
  return response;
};

const Blog = async () => {
  const posts = await getData();

  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <h1>Blog</h1>
      </div>
      <div className={styles.posts}>
        <BlogPosts posts={posts} />
      </div>
    </main>
  );
};

export default Blog;
