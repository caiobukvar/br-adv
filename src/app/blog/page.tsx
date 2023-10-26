import styles from "./page.module.css";
import BlogPosts from "@/components/BlogPosts";

export async function generateMetadata() {
  return {
    title: "Blog",
  };
}

export default function Blog() {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <h1>Blog</h1>
      </div>
      <div className={styles.posts}>
        <BlogPosts />
      </div>
    </main>
  );
}
