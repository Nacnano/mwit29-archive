import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { getAllStudentIds, getStudentById } from '../../lib/students'
import { Student } from '../../models/student'

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllStudentIds()

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const studentData: Student = await getStudentById(params?.id as string)

  return { props: { studentData } }
}

export default function StudentPage({ studentData }: { studentData: Student }) {
  return (
    <>
      <div key={studentData.id} className="text-center text-lg">
        HI {studentData.firstname}
      </div>
    </>
  )
}
