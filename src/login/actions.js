export const changeUsername = ({ state }, username) => {
  state.login.username = username
}

export const changePassword = ({ state }, password) => {
  state.login.password = password
}

export const login = async ({ state, actions, effects }) => {
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

export const resolveUser = ({ state }, user) => {
  state.login.user = user
  state.login.username = ''
  state.login.password = ''
}

export const rejectUser = ({ state }, error) => {
  state.login.authenticationError = error.message
}

export const logout = ({ effects }) => {
  effects.login.api.logout()
}

export const tryAgain = () => {}
