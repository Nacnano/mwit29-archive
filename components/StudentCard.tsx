import Link from 'next/link'
import { Student } from '../models/student'

const StudentCard = ({ student }: { student: Student }) => {
  return (
    <Link
      href={{
        pathname: '/student/[id]',
        query: { id: student.id },
      }}
      as={`/student/${student.id}`}
      className="max-w-sm bg-gray-100 border border-gray-200 rounded-lg shadow-md hover:scale-110"
    >
      <img
        className="rounded-t-lg"
        src={'/student/' + student.id + '.jpg'}
        alt={student.id + '-picture'}
      />
    </Link>
  )
}

export default StudentCard
