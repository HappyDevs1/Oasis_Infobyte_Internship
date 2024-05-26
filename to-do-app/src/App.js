import React from 'react';
import Pending from './Pending';
import Completed from './Completed'

function App () {
  return (
    <div>
      <h1>To-Do-APP</h1>
      <Pending />
      <Completed />
    </div>
  )
}

export default App;