export default interface IUser {
  id: number,
  password: number,
  name: string,
  email: string,
  github?: string,
  is_admin: number
}

// export interface INewUser extends IUser {
//   id: number,
//   password: number
// }