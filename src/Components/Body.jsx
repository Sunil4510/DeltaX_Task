import React from 'react'
import {Routes,Route,Link} from "react-router-dom"
import Addartist from './Addartist'
import Addsong from './Addsong'
import Lists from './Lists'
import AddIcon from '@mui/icons-material/Add';


const Body = () => {
  const btn = "bg-blue-400 p-2 w-44 shadow-xl text-center  text-xl shadow-black text-center rounded-xl transition ease-in delay-100 duration-200 hover:scale-125 hover:font-bold font-bold font-Dosis tracking-widest uppercase"
  return (
    <div>
      <div className="text-3xl flex items-center justify-between mb-10 sticky top-0">
        <div>
          <Link to="/"><p className={btn}>HOME</p></Link>
        </div>
        <div className="space-x-10">
          <Link to="/addsong">
            <button className={btn}><AddIcon sx={{fontSize:30}} className="text-red-400"/> Addsong</button> </Link>
          <Link to="/addartist"><button className={btn}><AddIcon sx={{fontSize:30}} className="text-red-400"/> Addartist</button></Link>
        </div>
      </div>

        <Routes>
          <Route path="/" element={<Lists/>}/>
          <Route path="/addsong" element={<Addsong/>}/>
          <Route path="/addartist" element={<Addartist/>}/>
        </Routes>
    </div>
  )
}

export default Body