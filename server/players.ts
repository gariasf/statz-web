import {
  query,
} from "./database"
import { responseOK } from "./api"
import { NextApiRequest, NextApiResponse } from "next"


export async function findAll() {
  const userData: any[] = await query<any>('SELECT * FROM statz_players;')
  return responseOK(userData)
}


export async function getById(req: NextApiRequest, res: NextApiResponse) {
  const playerId = req.query.id
  const userData: any[] = await query<any>(`SELECT * FROM statz_players WHERE uuid = "${playerId}";`)

  return responseOK(userData)
}
