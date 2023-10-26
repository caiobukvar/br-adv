import styles from "./page.module.css";
import blogPosts from "../../../blogPosts.json";

type Post = {
  id: number;
  title: string;
  paragraphs: { id: number; paragraph: string }[];
};

export async function generateMetadata({ params }: { params: { id: string } }) {
  return {
    title: `Blog post ${params.id}`,
  };
}

export default function Page({ params }: { params: { id: string } }) {
  const post: Post | undefined = blogPosts.find(
    (post) => post.id === Number(params.id),
  );

  return (
    <main className={styles.main}>
      <div className={styles.posts}>
        <article className={styles.article}>
          <h2>{post?.title}</h2>
          {post?.paragraphs.map((paragraph) => {
            return <p key={paragraph.id}>{paragraph.paragraph}</p>;
          })}
        </article>
      </div>
    </main>
  );
}
