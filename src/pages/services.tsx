import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

import Link from "next/link";
import { Counter, Todo } from "@/components";
import Back from '../components/Back'
// import { useRouter } from "next/router"; // useRouter

export default function services() {
  // const router = useRouter(); // useRouter
  return (
    <>
       <Head>
        <title>SajidHanifApp - Services</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <br />
      <center>
        <h2>Services</h2>
        <br />
        <br />
        <Counter />
        <br />
        <br />
        <Todo />
        <Back />
      </center>
      <main className={styles.main}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
        </ul>
      </main>
    </>
  );
}
