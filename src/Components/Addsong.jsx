import React from 'react'
import { useState } from 'react'
import axios from "axios"

const Addsong = () => {
  const [song,setsong] = useState({name:'',release:"",artists:"",img:""});
  const onchange = (e) => {
    setsong({...song,[e.target.name]:e.target.value})
  }
  console.log(song)
  const onsubmit = async(e) => {
    e.preventDefault()
    const data = new FormData();
    data.append('name',song.name);
    data.append('release',song.release);
    data.append('artists',song.artists);
    data.append('img',song.img);
    axios.post("http://localhost:5000/addsong",data,{}).then((res)=>{
      console.log(res);
      console.log("win")
      window.alert("added successfully")
    }).catch((err)=>{
      window.alert("fail to add already exists")
      console.log(err,"fail")
    });
  }
  return (
    <div className='flex flex-col justify-center items-center'>
      <form method='POST' className='w-1/3 space-y-10 border-2 p-10 flex flex-col justify-center items-center bg-inherit border-gray-500 shadow-xl shadow-black rounded-xl '>
        <div className='flex flex-col'>
          <label className='mb-2 font-bold text-md uppercase'>Song Name:</label>
          <input className='w-60 bg-white text-black border-2 p-2 rounded-lg' type="text" name="name" onChange={onchange} placeholder="Enter song name"/>
        </div>
        <div className="flex flex-col">
          <label className='mb-2 font-bold text-md uppercase'>Date of Release:</label>
          <input className='w-60 bg-white text-black border-2 p-2 rounded-lg' type="date" name="release" onChange={onchange} placeholder="Enter release date"/>
        </div>
        <div className='flex flex-col'>
          <label className='mb-2 font-bold text-md uppercase'>Artists:</label>
          <input className='w-60 bg-white text-black border-2 p-2 rounded-lg' type="text" name="artists" onChange={onchange} placeholder="Enter singers name"/>
        </div>
        <div className='flex flex-col'>
          <label className='mb-2 font-bold text-md uppercase'>Artwork:</label>
          <input className='w-60 bg-white text-black border-2 p-2 rounded-lg' type="file" name="img" onChange={(e)=>{setsong({...song,[e.target.name]:e.target.files[0]})}} accept='image/*'/>
        </div>
          <input className='bg-inherit font-black text-xl  tracking-widest font-Dosis shadow-lg text-black cursor-pointer shadow-black transition ease-in delay-150 duration-150 hover:scale-125 p-2 rounded-lg w-40' type="submit" onClick={onsubmit}/>
      </form>
    </div>
  )
}

export default Addsong