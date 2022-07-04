import { newTask } from '../interfaces/task.interface'
import taskModel from '../models/task.model'

// const getAll =  () => {
//   console.log('falta implementaçao')
// }

const create = async (newTask: newTask) => {
  const task = await taskModel.create(newTask)
  
  return task
}

const getByIdUser = async (id: string) => {
  const tasks = await taskModel.getByIdUser(id)

  return tasks
}

const editById =  () => {
  console.log('falta implementaçao')
}

const deleteById = async (id: string) => {
  await taskModel.deleteById(id)
}

export default {
  create,
  getByIdUser,
  editById,
  deleteById
}