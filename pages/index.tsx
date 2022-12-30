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
      <main className="mb-auto max-w-5xl flex w-full flex-1 h-screen flex-col items-center justify-center px-10 text-center overflow-hidden">
        <div className="">
          <div className="flex flex-col items-center text-3xl font-medium text-center mr-10">
            <div>&quot;I dreamed to be a doctor for my whole life.</div>
            <div>
              But being at MWIT, it made me realized that I could be a
              doctor.&quot;
            </div>
          </div>
          <div className="mt-5 place-self-end text-2xl font-normal text-right pb-20">
            Nac, Computer Engineer
          </div>
        </div>
      </main>

      <section className="relative -mt-20 w-full max-w-4xl flex flex-col items-start justify-start">
        <div className="w-full flex flex-col items-center">
          <h1 className="text-4xl font-bold">Rooms</h1>
        </div>
        <div className="w-full flex flex-col justify-center">
          <div className="flex flex-row flex-wrap justify-center items-center gap-5">
            {
              //  Add RoomCards here
            }
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
