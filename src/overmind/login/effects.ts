import { IUser } from './state'

export const api = {
  login: async (name: string, pass: string) => {
    return new Promise<IUser>(res => {
      setTimeout(() => {
        res({ name, pass })
      }, 2000)
    })
  },
  logout: async () => {
    return new Promise(res => {
      setTimeout(() => {
        res()
      }, 2000)
    })
  }
}
