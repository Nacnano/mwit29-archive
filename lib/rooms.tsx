import { Room } from '../models/room'

export async function getSortedRoomsData() {
  const res = await fetch(process.env.APP_URL + '/api/rooms')
  const rooms = await res.json()

  return rooms.sort((a: Room, b: Room) => {
    if (a.id > b.id) return 1
    return -1
  })
}
