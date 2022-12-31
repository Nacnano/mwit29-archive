export type Student = {
  id: string
  mwit: number
  room: number
  firstname: string
  lastname: string
  nickname: string
  study: string
  abroad: boolean | false
  major: string
  fields: string[]
  subject?: string[]
  description?: string
  favorites?: string[]
  quote: string
  tel?: string
  fb?: string
  line?: string
  ig?: string
  active: boolean | true
}
