import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'overmind-react'
import {json} from 'overmind'
import './styles.css'
import { LoginComponent } from './LoginComponent'
import { useApp, app } from './overmind'

function App () {
  const { state, actions } = useApp()

  console.log(json(state))

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
