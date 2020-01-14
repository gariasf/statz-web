import { NextApiRequest, NextApiResponse } from 'next'
import { ApiResponse } from '../../shared/api-types'
import { responseKO } from '../api'

const defaultCols = ['value', 'world']

export async function getTops(req: NextApiRequest, res: NextApiResponse): Promise<ApiResponse<any>> {
  return responseKO({
    error: 'Method not yet implemented',
    errorMessage: 'Method not yet implemented',
    statusCode: 500,
  })
}
