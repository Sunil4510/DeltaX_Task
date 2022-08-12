import React, { useState } from 'react'
import Topartist from './Topartist'
import Topsong from './Topsong'

const Lists = () => {
    const btn = "w-40 text-center text-lg shadow-xl shadow-green-400 text-center rounded-xl transition ease-in delay-100 duration-200 hover:scale-125 hover:font-bold font-bold font-Dosis tracking-widest uppercase hover:text-green-400"
    const[value,setvalue]=useState(true);
  return (
    <div>
        <div className="flex items-center space-x-10 sticky top-28 cursor-pointer mb-10">
            <p className={btn} onClick={()=>setvalue(true)}>TOP 10 SONGS</p>
            <p className={btn} onClick={()=>setvalue(false)}>TOP 10 ARTISTS</p>
       </div>
       <br/>
       {value?<Topsong/>:<Topartist/>}
    </div>
    
  )
}

export default Lists