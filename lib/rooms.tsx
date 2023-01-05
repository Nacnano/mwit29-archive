import { GetStaticPaths } from 'next'
import { Room } from '../models/room'

export async function getAllRoomsData() {
  const res = await fetch(process.env.APP_URL + '/api/rooms')
  const rooms = await res.json()

  return rooms.sort((a: Room, b: Room) => {
    if (a.id > b.id) return 1
    return -1
  })
}

export async function getAllRoomsIds() {
  const res = await fetch(process.env.APP_URL + '/api/rooms')
  const rooms = await res.json()

  return rooms.map((room: Room) => {
    return {
      params: {
        id: room.id,
      },
    }
  })
}
