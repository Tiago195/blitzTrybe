import { NextFunction, Request, Response } from 'express'

const errorGeneric = (error, _req: Request, res: Response, _next: NextFunction) => {
  if(error.statusCode) return res.status(error.statusCode).json({message: error.message})

  res.status(500).json({message: 'Internal server error'})
}

export default errorGeneric