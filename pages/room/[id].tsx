import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { getAllRoomsIds } from '../../lib/rooms'
import { Room } from '../../models/room'
import { Student } from '../../models/student'

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllRoomsIds()
  console.log(paths)
  return {
    paths,
    fallback: false,
  }
}

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   const roomData: Student[] = await getStudentById(params?.id as string)
//   return {
//     props: {
//       roomData,
//     },
//   }
// }

export default function Room() {
  return <div>Coming Soon...</div>
}
