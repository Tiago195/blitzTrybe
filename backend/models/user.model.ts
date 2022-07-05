import connection from './connection'
import IUser, { userLogin, newUser, userWithoutPassword } from '../interfaces/user.interface'
import { ResultSetHeader, RowDataPacket } from 'mysql2'
// import { RowDataPacket } from 'mysql2'

const getAll = async (): Promise<Omit<IUser, 'password'>[]> => {
  const [users] = await connection.execute('SELECT id, name, email, github, is_admin FROM Users WHERE is_admin = 0')

  return users as Omit<IUser, 'password'>[]
}

const create = async ({name, password, email, github, is_admin = 0}: newUser) => {
  const [{insertId}] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Users (name, password, email, github, is_admin) VALUES (?, ?, ?, ?, ?)',
    [name, password, email, github || null, is_admin]
  )
  const newUser = {name, email, github, is_admin,id: insertId}

  return newUser
}

const getById = async (id: number): Promise<IUser> => {
  const [user] = await connection.execute<IUser[] & RowDataPacket[][]>('SELECT * FROM Users WHERE id = ?', [id])

  return user[0] as IUser
}

const getByEmailAndPassword = async ({email, password}: userLogin): Promise<userWithoutPassword> => {
  const [user] = await connection.execute<userWithoutPassword[] & RowDataPacket[][]>(
    'SELECT id, name, email, github, is_admin from Users WHERE email = ? AND password = ?',
    [email, password]
  )

  return user[0] as userWithoutPassword
}

export default {
  getAll,
  create,
  getById,
  getByEmailAndPassword
}