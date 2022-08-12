import React, { useEffect } from 'react'
import axios from 'axios'
import Rating from 'react-rating'
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import StarIcon from '@mui/icons-material/Star';
import { useState } from 'react';
const Topsong = () => {
  const [data,setdata] = useState([]);
  const [rate,setrate] = useState();
  useEffect(() => {
    axios.get("http://localhost:5000/topsong").then((res)=>{
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
                  Artwork
                </th>
                <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                  Song
                </th>
                <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                  Date of Release
                </th>
                <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                  Artists
                </th> 
                <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                  Rate
                </th>
              </tr>
            </thead>
            <tbody>
              {data?(data.map((item)=>{
                let image = new Blob([Int8Array.from(item.img.data.data)], {type:item.img.contentType})
                const src=window.URL.createObjectURL(image)
               // console.log(src)
                console.log(item.img.contentType)
                return(
                  <>
                  <tr className="bg-white border-b ">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {<img src={src} alt="worked" className="h-40 w-40 ml-auto mr-auto"/>}
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  {item.name}
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {item.release}
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {item.artists}
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  <Rating
                  emptySymbol={<StarBorderOutlinedIcon/>}
                  fullSymbol={<StarIcon/>}
                />
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

export default Topsong