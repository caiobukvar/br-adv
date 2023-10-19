"use client";
import UnderConstruction from "@/components/UnderConstruction";
import styles from "./page.module.css";

export default function Blog() {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <h1>Blog</h1>
      </div>
      <div className={styles.posts}>
        <UnderConstruction />
      </div>
    </main>
  );
}
