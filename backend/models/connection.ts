import mysql from 'mysql2/promise'

const connection = mysql.createPool({
  host: 'blitzTrybe-bd',
  password: 'tutu',
  user: 'root',
  database: 'blitzTrybe'
})

export default connection