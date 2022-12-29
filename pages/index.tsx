import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Footer from "../components/Footer";
import Header from "../components/Header";
import RoomCard from "../components/RoomCard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-gray-100 w-screen overflow-hidden h-screen flex flex-col items-center">
      <Head>
        <title>MWIT 29 Archive</title>
        <meta
          name="description"
          content="NOTED MORE DETAILED DESCRIPTION SOON"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="mb-auto max-w-4xl flex w-full flex-1 h-screen flex-col items-center justify-center px-10 text-center overflow-hidden">
        <div className="items-center">
          <a> Coming Soon...</a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
