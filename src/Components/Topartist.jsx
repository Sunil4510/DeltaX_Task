import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react';

const Topartist = () => {
  const [data,setdata] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/topartist").then((res)=>{
      setdata(res.data)
      console.log(data)
    }).catch((err) => console.log(err))
  }, [])
  const display = ()=>{
    data.map((item)=>{
      console.log(item.name)
    })
  }
  display()
  console.log(data)
  return (
    <div className="">
          <table className="min-w-full text-center">
            <thead className="border-b bg-gray-800 text-xl w-full uppercase">
              <tr className="flex items-center justify-around px-4 py-2">
                <th scope="col" className="font-bold w-full text-white px-6 py-4">
                  Artists
                </th>
                <th scope="col" className="font-bold w-full text-white px-6 py-4">
                  Date of Birth
                </th>
                <th scope="col" className="font-bold w-full text-white px-6 py-4">
                  Songs
                </th>
                <th scope="col" className="font-bold w-full text-white px-6 py-4">
                 Bio
                </th> 
              </tr>
            </thead>
            <tbody className="bg-white w-full flex flex-col">
              {data?(data.map((item)=>{
                return(
                  <>
                  <tr className="bg-white border-b flex justify-around items-center px-4 py-4 text-lg uppercase">
                    <td className="px-6 py-4 w-full whitespace-nowrap font-semibold ">
                     {item.name}
                    </td>
                    <td className="text-gray-900 font-semibold px-6 py-4 w-full whitespace-nowrap">
                      {item.dob}
                    </td>
                    <td className="text-gray-900 font-semibold px-6 py-4 w-full whitespace-nowrap">
                      {item.songs}
                    </td>
                    <td className="text-gray-900 font-semibold px-6 py-4 w-full whitespace-nowrap">
                      {item.bio}
                    </td>
                </tr>
                </>
                )})):(<h1>nothing</h1>)}
            </tbody>
          </table>
    </div>
  )
}

export default Topartist