import React from 'react'

export default function FreeToolCard({title, img, linkTo}) {
  return (
    <div className="w-[300px]  h-[250px] bg-white bg-cover bg-center flex flex-col p-8 rounded-2xl justify-between" style={{ backgroundImage: `url(${img})` }}>
        <div className="text-slate-800 font-bold text-xl">{title}</div>
        <div className="text-sky-700 font-semibold text-lg">{linkTo}</div>
    </div>
  )
}
