import { Student } from '../models/student'

export async function getStudentsByRoomId(roomId: string) {
  const res = await fetch(process.env.APP_URL + '/api/students')
  const students = await res.json()

  return students.filter((student: Student) => {
    return student.id === roomId
  })
}

export async function getAllStudents(roomId: string) {
  const res = await fetch(process.env.APP_URL + '/api/students')
  const students = await res.json()

  return students.sort((a: Student, b: Student) => {
    if (a.id <= b.id) return -1
    return 1
  })
}
