import mariadb from 'mariadb'

import config from '../shared/config'

const pool: mariadb.Pool = mariadb.createPool({
  ...config.database,
  connectionLimit: 100,
})

function getConnection(): Promise<mariadb.PoolConnection> {
  let connection: Promise<mariadb.PoolConnection> = null

  try {
    connection = pool.getConnection()
  } catch (err) {
    throw err
  }

  return connection
}

export async function closeDb(): Promise<void> {
  const conn = await getConnection()
  return conn.end()
}

export async function query(sql: string): Promise<any[]> {
  const conn: mariadb.PoolConnection = await getConnection()
  let queryResult = null

  try {
    queryResult = conn.query(sql)
  } catch (err) {
    closeDb()
    throw err
  }

  return queryResult
}
