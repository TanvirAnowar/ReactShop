import React from 'react'
// import ErrorExample from './UserState/error-example'
// import UseStateArray from './UserState/use-state-array'
// import UseStateObject from './UserState/use-state-object'
import UseStateCounter from './UserState/UseStateCounter'
import UseEffectCleanup from './UseEffect/UseEffectCleanup'

function App() {
  return (
    <div className='container'>
      {/* <ErrorExample></ErrorExample> */}

      {/* <UseStateArray></UseStateArray> */}
      {/* <UseStateObject></UseStateObject> */}
      {/* <UseStateCounter></UseStateCounter> */}
      <UseEffectCleanup></UseEffectCleanup>
    </div>
  )
}
 
export default App