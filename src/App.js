import React from 'react'
import Sidebar from './Components/Sidebar'

const App = () => {
  return (
    <div className="App_parent">
      <div className="App_child">
        {<Sidebar/>}
        {/*body*/}
      </div>
      {/*footer*/}
    </div>
  )
}

export default App