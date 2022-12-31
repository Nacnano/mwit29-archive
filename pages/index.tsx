import Head from 'next/head'
import { Inter } from '@next/font/google'
import Footer from '../components/Footer'
import Header from '../components/Header'
import RoomCard from '../components/RoomCard'
import { Room } from '../models/room'
import { GetStaticProps } from 'next'
import { getSortedRoomsData } from '../lib/rooms'

const inter = Inter({ subsets: ['latin'] })

type Props = {
  sortedRooms: Room[]
}

export default function Home({ sortedRooms }: Props) {
  return (
    <div>
      <Head>
        <title>MWIT 29 Archive</title>
        <meta name="description" content="NOTED MORE DETAILED DESCRIPTION SOON" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-gray-100 w-screen h-screen flex flex-col items-center">
        <Header />
        <div>
          <div className="relative max-w-5xl flex w-full flex-1 h-screen flex-col items-center justify-center px-10 text-center overflow-hidden">
            <div className="">
              <div className="flex flex-col items-center text-3xl font-medium text-center mr-10">
                <div>&quot;I dreamed to be a doctor for 16 years.</div>
                <div>But being at MWIT, it made me realized that I could be a doctor.&quot;</div>
              </div>
              <div className="mt-5 place-self-end text-2xl font-normal text-right pb-20">
                Nac, Computer Engineer
              </div>
            </div>
          </div>

          <div className="relative mt-5 px-10 w-full max-w-5xl flex flex-col items-center justify-center">
            <div className="w-full flex flex-col items-center">
              <h1 className="text-4xl font-bold">Rooms</h1>
            </div>
            <div className="mt-5 w-full flex flex-col justify-center">
              <div className="flex flex-row flex-wrap justify-center items-center gap-10">
                {sortedRooms.map((room) => {
                  return <RoomCard key={room.id} room={room} />
                })}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async function () {
  const sortedRooms = await getSortedRoomsData()

  return {
    props: {
      sortedRooms,
    },
  }
}
