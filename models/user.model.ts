import connection from './connection'
import IUser from '../interfaces/user.interface'
// import { RowDataPacket } from 'mysql2'

const getAll = async (): Promise<Omit<IUser, 'password'>[]> => {
  const [users] = await connection.execute('SELECT id, name, email, github, is_admin FROM Users')

  return users as Omit<IUser, 'password'>[]
}

const create =  () => {
  console.log('falta implementaçao')
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