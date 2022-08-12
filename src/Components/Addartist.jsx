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
    <div className='flex flex-col'>
      <form method='POST' className='space-y-10  w-48'>
        <input type="text" name="name" onChange={handleinputs} value={artist.name} placeholder="Enter singer name"/>
        <input type="Date" name="dob" onChange={handleinputs} value={artist.dob} placeholder="Enter Date of Birth"/>
        <input type="text" name="bio" onChange={handleinputs} value={artist.bio} placeholder="Enter bio"/>
        <input type="text" name="songs" onChange={handleinputs} value={artist.songs} placeholder="Enter Songs"/>
        <input type="submit" onClick={postData}/>
      </form>
    </div>
  )
}

export default Addartist