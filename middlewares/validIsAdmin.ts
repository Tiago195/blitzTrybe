import { NextFunction, Response } from 'express'
import { IRequestWithUser } from '../interfaces/user.interface'
import generateObjError from '../utils/generateObjError'

const validIsAdmin = (req: IRequestWithUser, res: Response, next: NextFunction) => {
  if(!req.user?.is_admin) next(generateObjError('user is not authorized', 403))

  next()
}

export default validIsAdmin