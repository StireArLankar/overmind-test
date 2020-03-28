export type LoginState = {
  username: string
  password: string
  user: null | IUser
  authenticationError: null
}

export interface IUser {
  name: string
  pass: string
}

export const state: LoginState = {
  username: '',
  password: '',
  user: null,
  authenticationError: null
}
