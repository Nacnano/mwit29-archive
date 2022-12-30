import type { NextApiRequest, NextApiResponse } from "next";
import { Room } from "../../models/room";
import rooms from "../../data/rooms.json";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Room[]>
) {
  res.status(200).json(rooms);
}
