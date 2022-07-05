import { NextFunction, Request, Response } from 'express'
import Joi from 'joi'
import generateObjError from '../utils/generateObjError'

const schemaTask = Joi.object({
  branch: Joi.string().required(),
  title: Joi.string().required(),
  content: Joi.string().required(),
  user_id: Joi.number().required(),
})

const validTask = (req: Request, _res: Response, next: NextFunction) => {
  const { error } = schemaTask.validate(req.body)

  if(error) return next(generateObjError(error.message, 400))
  
  next()
}

export default validTask