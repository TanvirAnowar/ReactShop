import React from 'react'
// import ErrorExample from './UserState/error-example'
// import UseStateArray from './UserState/use-state-array'
// import UseStateObject from './UserState/use-state-object'
import UseStateCounter from './UserState/UseStateCounter'
import UseEffectCleanup from './UseEffect/UseEffectCleanup'
import UserEffectAsync from './UseEffect/UserEffectAsync'

function App() {
  return (
    <div className='container'>
      {/* <ErrorExample></ErrorExample> */}

      {/* <UseStateArray></UseStateArray> */}
      {/* <UseStateObject></UseStateObject> */}
      {/* <UseStateCounter></UseStateCounter> */}
      {/* <UseEffectCleanup></UseEffectCleanup> */}
      <UserEffectAsync></UserEffectAsync>
    </div>
  )
}
 
export default App