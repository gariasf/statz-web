import { query } from './database'
import { responseOK } from './api'
import { NextApiRequest, NextApiResponse } from 'next'
import { PlayerStats, PlayerStatsData } from '../shared/api-types'
import config from '../shared/config'

const defaultCols = ['value', 'world']

export async function findAll() {
  const userData: any[] = await query('SELECT uuid, playerName FROM statz_players;')
  return responseOK(userData)
}

export async function getById(req: NextApiRequest, res: NextApiResponse) {
  const playerId = req.query.id.toString()

  const playerStats: PlayerStats = new PlayerStats()
  const playerStatsData: PlayerStatsData = new PlayerStatsData()
  const playerName = (await statzQuery('players', ['playerName'], playerId))[0].playerName

  playerStats.uuid = playerId.toString()
  playerStats.playerName = playerName

  playerStatsData.arrowsShot = await statzQuery('arrows_shot', defaultCols, playerId)
  playerStatsData.blocksBroken = await statzQuery('blocks_broken', [...defaultCols, 'block'], playerId)
  playerStatsData.blocksPlaced = await statzQuery('blocks_placed', [...defaultCols, 'block'], playerId)
  playerStatsData.bucketsEmptied = await statzQuery('buckets_emptied', defaultCols, playerId)
  playerStatsData.bucketsFilled = await statzQuery('buckets_filled', defaultCols, playerId)
  playerStatsData.deaths = await statzQuery('deaths', defaultCols, playerId)
  playerStatsData.damageTaken = await statzQuery('damage_taken', [...defaultCols, 'cause'], playerId)
  playerStatsData.distanceTraveled = await statzQuery('distance_travelled', [...defaultCols, 'moveType'], playerId)
  playerStatsData.eggsThrown = await statzQuery('eggs_thrown', defaultCols, playerId)
  playerStatsData.foodEaten = await statzQuery('food_eaten', [...defaultCols, 'foodEaten'], playerId)
  playerStatsData.enteredBeds = await statzQuery('entered_beds', defaultCols, playerId)
  playerStatsData.itemsCaught = await statzQuery('items_caught', [...defaultCols, 'caught'], playerId)
  playerStatsData.itemsCrafted = await statzQuery('items_crafted', [...defaultCols, 'item'], playerId)
  playerStatsData.itemsDropped = await statzQuery('items_dropped', [...defaultCols, 'item'], playerId)
  playerStatsData.itemsPickedUp = await statzQuery('items_picked_up', [...defaultCols, 'item'], playerId)
  playerStatsData.killsMobs = await statzQuery('kills_mobs', [...defaultCols, 'mob', 'weapon'], playerId)
  playerStatsData.killsPlayers = await statzQuery('kills_players', [...defaultCols, 'playerKilled'], playerId)
  playerStatsData.timePlayed = await statzQuery('time_played', defaultCols, playerId)
  playerStatsData.toolsBroken = await statzQuery('tools_broken', [...defaultCols, 'item'], playerId)
  playerStatsData.xpGained = await statzQuery('xp_gained', defaultCols, playerId)

  playerStats.stats = playerStatsData

  return responseOK(playerStats)
}

async function statzQuery(table: string, columns: string[], playerId: string): Promise<any[]> {
  const columnSelection: string = columns.reduce((acc, cur) => `${acc}, ${cur}`)

  const result = await query(
    `SELECT ${columnSelection} FROM ${config.database.prefix}_${table} WHERE uuid = "${playerId}";`
  )

  if (!result.length) {
    return null
  }

  return result
}
