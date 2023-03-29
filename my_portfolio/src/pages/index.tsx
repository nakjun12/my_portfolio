import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "../../components/layout";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      {" "}
      <Head>
        <title>황준의 포트폴리오</title>
        <meta
          name="description"
          content="황준의 포트폴리오입니다 방문해주셔서 감사합니다."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>홈인비다.</h1>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </main>
    </>
  );
}
