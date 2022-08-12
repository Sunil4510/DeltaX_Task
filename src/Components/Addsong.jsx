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
    <div className='flex flex-col'>
      <form method='POST' className='space-y-10  w-48'>
        <input type="text" name="name" onChange={onchange} placeholder="Enter song name"/>
        <input type="date" name="release" onChange={onchange} placeholder="Enter release date"/>
        <input type="text" name="artists" onChange={onchange} placeholder="Enter singers name"/>
        <input type="file" name="img" onChange={(e)=>{setsong({...song,[e.target.name]:e.target.files[0]})}} accept='image/*'/>
        <input type="submit" onClick={onsubmit} />
      </form>
    </div>
  )
}

export default Addsong