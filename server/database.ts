
import mariadb from 'mariadb'

import config from '../shared/config'

const pool: mariadb.Pool = mariadb.createPool({
  ...config.database,
  connectionLimit: 5
})


function getConnection(): Promise<mariadb.PoolConnection> {
  let connection: Promise<mariadb.PoolConnection> = null

  try  {
    connection = pool.getConnection()
  } catch(err) {
    throw err
  } 

  return connection
}

export async function closeDb() {
  const conn = await getConnection()
  return conn.end()
}

export async function query<T>(sql: string): Promise<T[]> {
  const conn: mariadb.PoolConnection = await getConnection()
  let queryResult = null

  try {
    queryResult = conn.query(sql);
  } catch (err) {
     throw err
  }

  return queryResult
}

