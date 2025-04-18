import React from 'react'

export default function FeaturesCard({image, title, description}) {
  return (
    <div className="bg-blue-50 p-5 rounded-2xl text-stone-800 w-[21%]">
        <div className="w-20 h-20 ">
        <img src={image} alt="" />
        </div >
        <div className="text-lg font-semibold mb-5">{title}</div>
        <div className="text-sm font-light text-wrap" >{description}</div>
        
    </div>
  )
}
