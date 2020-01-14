import { NextApiRequest, NextApiResponse } from 'next'
import { ApiResponse, PlayerStats, PlayerStatsData } from '../../shared/api-types'
import { responseOK } from '../api'
import { query, statzQuery } from '../database'

const defaultCols = ['value', 'world']

export async function getTops(req: NextApiRequest, res: NextApiResponse): Promise<ApiResponse<any>> {
  return responseOK({})
}
