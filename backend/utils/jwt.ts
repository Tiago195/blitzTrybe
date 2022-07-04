import jwt, { JwtPayload, SignOptions } from 'jsonwebtoken'
import { userWithoutPassword } from '../interfaces/user.interface'

const secret = 'seusecretdetoken'

const jwtConfig: SignOptions = {
  expiresIn: '7d',
  algorithm: 'HS256',
}

const encode = (data: userWithoutPassword) => jwt.sign({data}, secret, jwtConfig)

const decode = (token: string): JwtPayload => jwt.verify(token, secret) as JwtPayload

export default {
  encode,
  decode
}
