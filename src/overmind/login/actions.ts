import { Action, AsyncAction } from 'overmind'
import { IUser } from './state'

export const changeUsername: Action<string> = ({ state }, username) => {
  state.login.username = username
}

export const changePassword: Action<string> = ({ state }, password) => {
  state.login.password = password
}

export const login: AsyncAction = async ({ state, actions, effects }) => {
  try {
    const user = await effects.login.api.login(
      state.login.username,
      state.login.password
    )

    actions.login.resolveUser(user)
  } catch (error) {
    actions.login.rejectUser(error)
  }
}

export const resolveUser: Action<IUser> = ({ state }, user) => {
  state.login.user = user
  state.login.username = ''
  state.login.password = ''
}

export const rejectUser: Action<any> = ({ state }, error) => {
  state.login.authenticationError = error.message
}

export const logout: Action = ({ state, effects }) => {
  effects.login.api.logout()
  state.login.user = null
}

export const tryAgain: Action = () => {}
