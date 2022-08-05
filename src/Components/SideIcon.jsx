import React from 'react'

const SideIcon = ({Icon,title}) => {
  return (
    <div className="text-sm font-bold text-gray-400 hover:text-white font-Dosis tracking-widest flex items-center ml-6 cursor-pointer mt-4 ">
       {Icon && <Icon className="side_icon" sx={{fontSize:"30px"}}/>}
       {Icon? <h4 className="ml-6">{title}</h4>:<p>{title}</p>}     
    </div>
  )
}

export default SideIcon