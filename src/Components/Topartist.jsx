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
    <div className="flex flex-col">
    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
        <div className="overflow-hidden">
          <table className="min-w-full text-center">
            <thead className="border-b bg-gray-800">
              <tr className="">
                <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                  Artists
                </th>
                <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                  Date of Birth
                </th>
                <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                  Songs
                </th>
                <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                 Bio
                </th> 
              </tr>
            </thead>
            <tbody>
              {data?(data.map((item)=>{
                return(
                  <>
                  <tr className="bg-white border-b ">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                     {item.name}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {item.dob}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {item.songs}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {item.bio}
                    </td>
                </tr>
                </>
                )})):(<h1>nothing</h1>)}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Topartist