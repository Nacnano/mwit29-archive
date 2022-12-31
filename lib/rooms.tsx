import { Room } from "../models/room";


export async function getSortedRoomsData() {
    const res = await fetch("https://mwit29-archive.vercel.app/api/rooms");
    const rooms = await res.json();
    console.group(rooms)
    return rooms.sort((a: Room, b: Room)=>{
        if (a.id < b.id)return 1;
        return -1;
    })
}