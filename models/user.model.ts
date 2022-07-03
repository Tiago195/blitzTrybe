import connection from './connection'
import IUser, { newUser } from '../interfaces/user.interface'
import { ResultSetHeader } from 'mysql2'
// import { RowDataPacket } from 'mysql2'

const getAll = async (): Promise<Omit<IUser, 'password'>[]> => {
  const [users] = await connection.execute('SELECT id, name, email, github, is_admin FROM Users')

  return users as Omit<IUser, 'password'>[]
}

const create = async ({name, password, email, github, is_admin = 0}: newUser) => {
  const [{insertId}] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Users (name, password, email, github, is_admin) VALUES (?, ?, ?, ?, ?)',
    [name, password, email, github || null, is_admin]
  )
  const newUser = {name, password, email, github, is_admin,id: insertId}

  return newUser
}

const getById =  () => {
  console.log('falta implementaçao')
}

const getByEmailAndPassword =  () => {
  console.log('falta implementaçao')
}

export default {
  getAll,
  create,
  getById,
  getByEmailAndPassword
}