export default interface IUser {
  id: number,
  password: string,
  name: string,
  email: string,
  github?: string,
  is_admin: number
}

export type newUser = Omit<IUser, 'id'>;

// export interface INewUser extends IUser {
//   id: number,
//   password: number
// }