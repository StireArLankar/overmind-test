import { statechart, Statechart } from 'overmind/config'
import * as actions from './actions'
import * as effects from './effects'
import { state } from './state'

const config = {
  state,
  actions,
  effects
}

const loginChart: Statechart<
  typeof config,
  {
    LOGIN: void
    AUTHENTICATING: void
    AUTHENTICATED: void
    ERROR: void
  }
> = {
  initial: 'LOGIN',
  states: {
    LOGIN: {
      on: {
        changeUsername: null,
        changePassword: null,
        login: {
          target: 'AUTHENTICATING',
          condition: state => Boolean(state.username && state.password)
        }
      }
    },
    AUTHENTICATING: {
      on: {
        resolveUser: 'AUTHENTICATED',
        rejectUser: 'ERROR'
      }
    },
    AUTHENTICATED: {
      on: {
        logout: 'LOGIN'
      }
    },
    ERROR: {
      on: {
        tryAgain: 'LOGIN'
      }
    }
  }
}

export default statechart(config, loginChart)
