import mysql from 'mysql2/promise'

const connection = mysql.createPool({
  host: 'localhost',
  password: 'tutu',
  user: 'root',
  database: 'blitzTrybe'
})

export default connection