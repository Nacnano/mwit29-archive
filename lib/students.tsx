import { Student } from '../models/student'

export async function getStudentsByRoomId(roomId: string) {
  const res = await fetch(process.env.APP_URL + '/api/students')
  const students = await res.json()

  return students.filter((student: Student) => {
    return student.room === roomId
  })
}

export async function getStudentById(id: string) {
  const res = await fetch(process.env.APP_URL + '/api/students')
  const students = await res.json()

  return students.filter((student: Student) => {
    return student.id === id
  })[0]
}

export async function getAllStudents(roomId: string) {
  const res = await fetch(process.env.APP_URL + '/api/students')
  const students = await res.json()

  return students.sort((a: Student, b: Student) => {
    if (Number(a.id) <= Number(b.id)) return -1
    return 1
  })
}

export async function getAllStudentIds() {
  const res = await fetch(process.env.APP_URL + '/api/students')
  const students = await res.json()

  return students.map((student: Student) => {
    return {
      params: {
        id: student.id,
      },
    }
  })
}
