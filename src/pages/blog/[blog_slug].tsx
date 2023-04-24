import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

import Link from "next/link";
import Back from "../../components/Back";
import { useRouter } from "next/router";

export default function BlogSlug() {
  const router = useRouter();
  const { blog_slug } = router.query;

  return (
    <>
       <Head>
        <title>SajidHanifApp - { blog_slug }</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <center>
        <br />
        <h2>Blog</h2>
        <h2>This is the {blog_slug}</h2>
        <br />
        <Back />
      </center>
      <main className={styles.main}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/gallery">Gallery</Link>
          </li>
        </ul>
      </main>
    </>
  );
}