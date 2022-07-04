import { NextFunction, Request, Response } from 'express'
import taskService from '../services/task.service'
import { newTask } from '../interfaces/task.interface'

const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { branch, content, title, user_id } = req.body as newTask

    const tasks = await taskService.create({ branch, content, title, user_id })

    res.status(201).json(tasks)
  } catch (error) {
    next(error)
  }
}

const getByIdUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const tasks = await taskService.getByIdUser(id)

    res.status(200).json(tasks)
  } catch (error) {
    next(error)
  }
}

const editById = (req: Request, res: Response) => {
  console.log('falta implementaçao')
}

const deleteById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const {id} = req.params
    await taskService.deleteById(id)

    res.status(204).end()
  } catch (error) {
    next(error)
  }
}

export default {
  create,
  getByIdUser,
  editById,
  deleteById
}