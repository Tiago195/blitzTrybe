import { Request } from 'express'

export default interface IUser {
  id: number,
  password: string,
  name: string,
  email: string,
  github?: string,
  is_admin: number
}

export type newUser = Omit<IUser, 'id'>;

export type userLogin = Omit<IUser, 'id' | 'name' | 'is_admin' | 'github'>

export type userWithoutPassword = Omit<IUser, 'password'>

export interface IRequestWithUser extends Request {
  user?: IUser
}

// export interface INewUser extends IUser {
//   id: number,
//   password: number
// }