import Link from 'next/link'
import Image from 'next/image'
import { Room } from '../models/room'

type Props = {
  room: Room
}

const RoomCard = ({ room }: Props) => {
  return (
    <Link
      href={{
        pathname: '/room/[id]',
        query: { id: room.id },
      }}
      as={`/room/${room.id}`}
      className="max-w-sm bg-gray-100 border border-gray-200 rounded-lg shadow-md hover:scale-110"
    >
      {/* ISSUE: next/image with tailwind is somehow unstable. */}
      <img className="rounded-t-lg" src={room.picturePath} alt={'room-' + room.id + '-picture'} />
      <div className="flex flex-col p-5">
        <div className="items-center justify-start gap-2">
          <h1 className="text-1xl font-normal tracking-tight text-gray-900">Room {room.id}</h1>

          <h2 className="text-2xl font-semibold align-middle text-gray-700">{room.name}</h2>
        </div>
        <div className="flex justify-end">
          <div className="inline-flex items-center px-3 py-2 text-medium font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800">
            {room.quote}
            <svg
              aria-hidden="true"
              className="w-4 h-4 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default RoomCard
