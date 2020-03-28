import React from 'react'

import { useApp } from './overmind'

export const LoginComponent = () => {
  const { state, actions } = useApp()

  return (
    <div>
      <input
        placeholder='user name'
        value={state.login.username}
        onChange={evt => actions.login.changeUsername(evt.target.value)}
      />
      <input
        placeholder='password'
        value={state.login.password}
        onChange={evt => actions.login.changePassword(evt.target.value)}
      />
      <div>
        <button onClick={() => actions.login.login()}>submit</button>
        <button onClick={() => actions.login.logout()}>logout</button>
        <button onClick={() => actions.login.tryAgain()}>tryAgain</button>
      </div>

      <p>Login: {state.login.matches({ LOGIN: true }) ? 'true' : 'false'}</p>
      <p>
        AUTHENTICATING:{' '}
        {state.login.matches({ AUTHENTICATING: true }) ? 'true' : 'false'}
      </p>
      <p>
        AUTHENTICATED:{' '}
        {state.login.matches({ AUTHENTICATED: true }) ? 'true' : 'false'}
      </p>
      <p>ERROR: {state.login.matches({ ERROR: true }) ? 'true' : 'false'}</p>
    </div>
  )
}
