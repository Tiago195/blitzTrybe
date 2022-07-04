import { ResultSetHeader } from 'mysql2'
import { newTask } from '../interfaces/task.interface'
import connection from './connection'

// const getAll =  () => {
//   console.log('falta implementaçao')
// }

const create = async ({branch, content, title, user_id}: newTask) => {
  const [{insertId}] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Tasks (title, branch, content, user_id) VALUES (?, ?, ?, ?)',
    [title, branch, content, user_id]
  )
  const newTask = {
    id: insertId,
    branch, content, title, user_id,
    status: 'panding'
  }
  return newTask
}

const getByIdUser = async (id: string) => {
  const [tasks] = await connection.execute('SELECT * FROM Tasks WHERE user_id = ?', [id])

  return tasks
}

const editById =  () => {
  console.log('falta implementaçao')
}

const deleteById = async (id: string) => {
  await connection.execute('DELETE FROM Tasks WHERE id = ?', [id])
}

export default {
  create,
  getByIdUser,
  editById,
  deleteById
}