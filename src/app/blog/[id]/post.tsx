import styles from "./page.module.css";
import blogPosts from "../../../blogPosts.json";

export default function Post({ params }: { params: { id: number } }) {
  const postSelected = blogPosts.find((post) => post.id === params.id);

  console.log(postSelected);

  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <h1>Blog</h1>
      </div>
      <div className={styles.posts}>
        <article>
          <h2>{postSelected.title}</h2>
          <p>{postSelected.content}</p>
        </article>
      </div>
    </main>
  );
}
