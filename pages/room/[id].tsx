import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { getAllRoomsIds } from '../../lib/rooms'
import { getStudentsByRoomId } from '../../lib/students'
import { Room } from '../../models/room'
import { Student } from '../../models/student'

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllRoomsIds()
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const roomData: Student[] = await getStudentsByRoomId(params?.id as string)
  return {
    props: {
      roomData,
    },
  }
}

export default function RoomPage() {
  return <div>Coming Soon...</div>
}
