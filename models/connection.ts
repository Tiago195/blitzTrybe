import mysql from 'mysql2'

const connection = mysql.createPool({
  host: 'localhost',
  password: 'tutu',
  user: 'root',
  database: 'blitzTrybe'
})

export default connection