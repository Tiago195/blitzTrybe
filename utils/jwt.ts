import jwt, { SignOptions } from 'jsonwebtoken'
import IUser from '../interfaces/user.interface'

const secret = 'seusecretdetoken'

const jwtConfig: SignOptions = {
  expiresIn: '7d',
  algorithm: 'HS256',
}

const encode = (data:Omit<IUser, 'password'>) => jwt.sign(data, secret, jwtConfig)

const decode = (token: string) => jwt.verify(token, secret)

export default {
  encode,
  decode
}
