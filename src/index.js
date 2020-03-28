import React from 'react'
import ReactDOM from 'react-dom'
import { createOvermind } from 'overmind'
import { createHook, Provider } from 'overmind-react'
import './styles.css'
import { namespaced, merge } from 'overmind/config'
import login from './login'
import { LoginComponent } from './LoginComponent'

const state = {
  count: 0,
  test: null,
  get testget () {
    return Boolean(this.test && true)
  }
}

const actions = {
  increaseCount ({ state }) {
    state.count++
  },
  decreaseCount ({ state }) {
    state.count--
  }
}

const onInitialize = ({ state }) => {
  state.test = 'x'
}

const products = {
  state: {
    a: null
  }
}

const configWithMerge = merge(
  {
    state,
    actions,
    onInitialize
  },
  namespaced({
    products,
    login
  })
)

const app = createOvermind(configWithMerge, {
  devtools: true
})

export const useApp = createHook()

function App () {
  const { state, actions } = useApp()

  console.log(state)

  return (
    <div className='App'>
      <h1>{state.count}</h1>
      <button onClick={() => actions.decreaseCount()}>decrease</button>
      <button onClick={() => actions.increaseCount()}>increase</button>
      <div>
        this must be true: <b>{state.testget.toString()}</b>
      </div>
      <LoginComponent />
    </div>
  )
}

const rootElement = document.getElementById('root')

ReactDOM.render(
  <Provider value={app}>
    <App />
  </Provider>,
  rootElement
)
