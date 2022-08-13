import React from 'react'
import { useState } from 'react'
import axios from "axios"

const Addartist = () => {
  const[artist,setartist] = useState({name:"",dob:"",bio:"",songs:""});
  let name,value;

  const handleinputs = (e)=>{
    name = e.target.name;
    value = e.target.value;
    console.log(name);
    setartist({...artist,[name]:value});
    console.log(artist);
  }

  const postData = async (e) => {
    e.preventDefault();
    console.group(artist);
    const {name,bio,dob,songs} = artist;
    axios.post("http://localhost:5000/addartist",{name,bio,dob,songs},{}).then((res)=>{
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
          <label className='mb-2 font-bold text-md uppercase'>Singer Name:</label>
          <input className='w-60 bg-white text-black border-2 p-2 rounded-lg' type="text" name="name" onChange={handleinputs} value={artist.name} placeholder="Enter singer name"/>
        </div>
        <div className="flex flex-col">
          <label className='mb-2 font-bold text-md uppercase'>Date of Birth:</label>
          <input className='w-60 bg-white text-black border-2 p-2 rounded-lg' type="Date" name="dob" onChange={handleinputs} value={artist.dob} placeholder="Enter Date of Birth"/>
        </div>
        <div className='flex flex-col'>
          <label className='mb-2 font-bold text-md uppercase'>Bio:</label>
          <input className='w-60 bg-white text-black border-2 p-2 rounded-lg' type="text" name="bio" onChange={handleinputs} value={artist.bio} placeholder="Enter bio"/>
        </div>
        <div className='flex flex-col'>
          <label className='mb-2 font-bold text-md uppercase'>Songs:</label>
          <input className='w-60 bg-white text-black border-2 p-2 rounded-lg' type="text" name="songs" onChange={handleinputs} value={artist.songs} placeholder="Enter Songs"/>
        </div>
          <input className='bg-inherit font-black text-xl  tracking-widest font-Dosis shadow-lg text-black cursor-pointer shadow-black transition ease-in delay-150 duration-150 hover:scale-125 p-2 rounded-lg w-40' type="submit" onClick={postData}/>
      </form>
    </div>
  )
}

export default Addartist