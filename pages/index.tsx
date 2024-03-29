import Head from 'next/head'
import { Inter } from '@next/font/google'
import RoomCard from '../components/RoomCard'
import { Room } from '../models/room'
import { GetServerSideProps, GetStaticProps } from 'next'
import { getAllRoomsData } from '../lib/rooms'
import clientPromise from '../lib/mongodb'

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

      <div className="bg-gray-100 w-screen h-full flex flex-col items-center">
        <div>
          <div className="bg-gray-200 relative max-w-8xl flex w-screen flex-1 h-screen flex-col items-center justify-center px-10 mb-10 text-center">
            <div className="">
              <div className="flex flex-col items-center text-4xl font-normal text-center mr-10 gap-3">
                <div>&quot;I dreamed to be an Engineer for 16 years.</div>
                <div>But being at MWIT, it made me realized that I could be a doctor.&quot;</div>
              </div>
              <div className="mt-5 text-2xl font-normal text-right pb-20">
                Nac, Computer Engineer
              </div>
            </div>
          </div>

          <div className="relative mt-0 px-10 mb-10 w-full max-w-8xl flex flex-col items-center justify-center">
            <div className="w-full flex flex-col items-center">
              <h1 className="text-4xl font-bold">Rooms</h1>
            </div>
            <div className="mt-5 w-full flex flex-col justify-center">
              <div className="flex flex-row flex-wrap justify-center items-center gap-5">
                {sortedRooms.map((room) => {
                  return <RoomCard key={room.id} room={room} />
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async function () {
  const sortedRooms = await getAllRoomsData()

  return {
    props: {
      sortedRooms,
    },
  }
}

// export const getServerSideProps: GetServerSideProps = async function () {
//   try {
//     await clientPromise
//     return {
//       props: {
//         isConnected: true,
//       },
//     }
//   } catch (e) {
//     return { props: { isConnected: false } }
//   }
// }
