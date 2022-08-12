import React from 'react'
import Body from './Body'
import Footer from './Footer'
import Sidebar from './Sidebar'

const User = () => {
  return (
    <div className="sidebar">
      <div className="sidebar_body flex">
        <Sidebar/>
      </div>

      <div className="sidebar_b bg-gradient-to-r from-pink-500 via-cyan-400 to-green-400 pl-80 p-10 pb-20 flex-1 h-screen">
            {/*body */}
            <Body/>
      </div>
      
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default User