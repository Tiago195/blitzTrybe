import { NextFunction, Request, Response } from 'express'
import Joi from 'joi'
import generateObjError from '../utils/generateObjError'

const schemaUser = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
})

const validLogin = (req: Request, _res: Response, next: NextFunction) => {
  const { error } = schemaUser.validate(req.body)

  if(error) return next(generateObjError(error.message, 400))
  
  next()
}

export default validLogin