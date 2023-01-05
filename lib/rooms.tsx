import { Room } from '../models/room'

export async function getAllRoomsData() {
  const res = await fetch(process.env.APP_URL + '/api/rooms')
  const rooms = await res.json()

  return rooms.sort((a: Room, b: Room) => {
    if (Number(a.id) > Number(b.id)) return 1
    return -1
  })
}

export async function getAllRoomsIds() {
  const res = await fetch(process.env.APP_URL + '/api/rooms')
  const rooms = await res.json()

  return rooms.map((room: Room) => {
    return {
      params: {
        id: room.id.toString(),
      },
    }
  })
}
