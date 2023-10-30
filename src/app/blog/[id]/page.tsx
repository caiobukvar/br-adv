import type { Metadata } from "next";

import { getPost } from "@/services/posts";
import { PostNotFound } from "@/components/BlogPosts";

import styles from "./page.module.css";
import Link from "next/link";

const getData = async (postId: number) => {
  const response = await getPost(postId);
  return response;
};

export const generateMetadata = async ({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> => {
  const post = await getData(Number(params.id));

  if (!post) return { title: "Post não encontrado" };

  return { title: post?.title };
};

const Page = async ({ params }: { params: { id: string } }) => {
  const post = await getData(Number(params.id));

  return (
    <main className={styles.main}>
      <div className={styles.posts}>
        <article className={styles.article}>
          <Link href="/blog">{`< Blog`}</Link>
          {!post ? (
            <PostNotFound />
          ) : (
            <>
              <h2>{post?.title}</h2>

              {post?.paragraphs.map((paragraph) => {
                return <p key={paragraph.id}>{paragraph.paragraph}</p>;
              })}
            </>
          )}
        </article>
      </div>
    </main>
  );
};

export default Page;
