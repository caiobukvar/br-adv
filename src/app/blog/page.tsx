/* eslint-disable @next/next/no-async-client-component */
"use client";
import UnderConstruction from "@/components/UnderConstruction";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import BlogPosts from "@/components/BlogPosts";
// import BlogPosts from "@/components/BlogPosts";

export default function Blog() {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <h1>Blog</h1>
      </div>
      <div className={styles.posts}>
        <BlogPosts />
        {/* <UnderConstruction /> */}
      </div>
    </main>
  );
}
