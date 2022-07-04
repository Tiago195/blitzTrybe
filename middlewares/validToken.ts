import { NextFunction, Response } from 'express'
import generateObjError from '../utils/generateObjError'
import jwt from '../utils/jwt'
import { IRequestWithUser } from '../interfaces/user.interface'

const validToken = (req: IRequestWithUser, res: Response, next: NextFunction) => {
  const { authorization: token } = req.headers
  
  if(!token) next(generateObjError('token not found', 401))

  try {
    const {data} = jwt.decode(token as string)

    req.user = data
  } catch (error) {
    next(generateObjError('invalid token', 401))
  }

  next()
}

export default validToken