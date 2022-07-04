import { newUser, userLogin } from '../interfaces/user.interface'
import userModel from '../models/user.model'
import generateObjError from '../utils/generateObjError'

const getAll = async () => {
  const users = await userModel.getAll()
  return users
}

const create = async (newUser: newUser) => {
  const userExist = await userModel.getByEmailAndPassword({email: newUser.email, password: newUser.password})
  if(userExist) throw generateObjError('User already exists', 409)

  const user = await userModel.create(newUser)

  return user
}

const getById =  () => {
  console.log('falta implementaçao')
}

const getByEmailAndPassword = async (userLogin: userLogin) => {
  const user = await userModel.getByEmailAndPassword(userLogin)
  if(!user) throw generateObjError('user not found', 404)
  return user
}

export default {
  getAll,
  create,
  getById,
  getByEmailAndPassword
}