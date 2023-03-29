import Head from "next/head";
import Hero from "@/components/Home/Hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>준황 프로젝트</title>
        <meta name="description" content="포트폴리오" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="flex min-h-screen flex-col justify-center items-center text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <Hero />
        </div>
      </section>
    </>
  );
}
