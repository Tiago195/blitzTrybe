import { NextFunction, Request, Response } from 'express'
import IUser, { IRequestWithUser, newUser } from '../interfaces/user.interface'
import userService from '../services/user.service'
import jwt from '../utils/jwt'

const getAll = async (req: IRequestWithUser, res: Response, next: NextFunction) => {
  try {
    const users = await userService.getAll()

    res.status(200).json(users)
  } catch (error) {
    next(error)
  }
}

const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, email, password, github, is_admin } = req.body as newUser

    await userService.create({ name, email, password, github, is_admin })

    res.status(201).json({message: 'user created'})
  } catch (error) {
    next(error)
  }
}

const getById = (req: Request, res: Response) => {
  console.log('falta implementaçao')
}

const getByEmailAndPassword = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body

    const user = await userService.getByEmailAndPassword({email, password})
    
    const token = jwt.encode(user)

    res.status(200).json({token, user})
  } catch (error) {
    next(error)
  }
}

export default {
  getAll,
  create,
  getById,
  getByEmailAndPassword
}