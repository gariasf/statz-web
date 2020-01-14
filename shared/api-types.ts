export type ApiError = 'BadRequest' | 'InternalServerError' | 'Unauthorized'
export type ApiResponse<T, E = any> = OKResponse<T> | KOResponse<E | ApiError>

export type OKResponse<T> = Readonly<{
  ok: true
  value: T
}>

export type KOResponse<T> = Readonly<{
  ok: false
  error: T
  statusCode: number
  errorMessage?: string
}>

export class PlayerStats {
  uuid: string
  playerName: string
  stats: PlayerStatsData
}

export class PlayerStatsData {
  arrowsShot: {
    value: number
    world: string
  }[]
  blocksBroken: {
    value: number
    type: string
  }[]
  blocksPlaced: {
    value: number
    type: string
  }[]
  bucketsEmptied: {
    value: number
    world: string
  }[]
  bucketsFilled: {
    value: number
    world: string
  }[]
  damageTaken: {
    value: number
    type: string
  }[]
  deaths: {
    value: number
    world: string
  }[]
  distanceTraveled: {
    value: number
    type: string
  }[]
  eggsThrown: {
    value: number
    world: string
  }[]
  enteredBeds: {
    value: number
    world: string
  }[]
  foodEaten: {
    value: number
    type: string
  }[]
  itemsCaught: {
    value: number
    type: string
  }[]
  itemsCrafted: {
    value: number
    type: string
  }[]
  itemsDropped: {
    value: number
    type: string
  }[]
  itemsPickedUp: {
    value: number
    type: string
  }[]
  killsMobs: {
    value: number
    mob: string
    weapon: string
  }[]
  killsPlayers: {
    value: number
    playerKilled: string
  }[]
  timePlayed: {
    value: number
  }[]
  toolsBroken: {
    vallue: number
    type: string
  }[]
  xpGained: {
    value: number
    world: string
  }[]
}
