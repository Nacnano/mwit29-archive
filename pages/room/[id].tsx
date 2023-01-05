import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { getAllRoomsIds } from '../../lib/rooms'
import { getStudentsByRoomId } from '../../lib/students'
import { Room } from '../../models/room'
import { Student } from '../../models/student'
import Header from '../../components/Header'

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllRoomsIds()
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const studentsData: Student[] = await getStudentsByRoomId(params?.id as string)
  return {
    props: {
      studentsData,
    },
  }
}

export default function RoomPage({ studentsData }: { studentsData: Student[] }) {
  // console.log(studentsData[0].firstname)
  return (
    <>
      <Header />
      <div>
        {studentsData.map((student) => (
          <div key={student.id} className="text-center">
            TH {student.firstname}
          </div>
        ))}
      </div>
    </>
  )
}
