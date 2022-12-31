import type { NextApiRequest, NextApiResponse } from 'next'
import { Student } from '../../models/student'
import students from '../../data/students.json'

export default function handler(req: NextApiRequest, res: NextApiResponse<Student[]>) {
  res.status(200).json(students)
}
