import Head from "next/head";
import Banner from "./components/Banner";
import CollectionCard from "./components/CollectionCard";
import Header from "./components/Header";
import IntroCard from "./components/IntroCard";

export default function Home() {
  return (
    <div>
      <Head>
        <title>The Grazed Palette</title>
      </Head>
      <Header />

      <main className=" max-w-screen-2xl mx-auto">
        <Banner />
        <IntroCard />
        <CollectionCard />
      </main>
    </div>
  );
}
