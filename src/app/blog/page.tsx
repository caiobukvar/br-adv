"use client";
import UnderConstruction from "@/components/UnderConstruction";
import styles from "./page.module.css";
import BlogPosts from "@/components/BlogPosts";
import i18next from "i18next";
export default function Blog() {
  let currentLang = localStorage.getItem("i18nextLng") || "pt";

  if (!i18next.languages.includes(currentLang)) {
    currentLang = i18next.defaultLanguage;
  }

  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <h1>Blog</h1>
      </div>
      <div className={styles.posts}>
        {/* <BlogPosts /> */}
        <UnderConstruction />
      </div>
    </main>
  );
}
