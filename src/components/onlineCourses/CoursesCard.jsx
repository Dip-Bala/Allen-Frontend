import React from 'react'

export default function CoursesCard({title, img, linkTo}) {
  return (
    <div className="w-[320px] h-[250px] bg-slate-100 bg-cover bg-center flex flex-col p-6 rounded-2xl justify-between" style={{ backgroundImage: `url(${img})` }}>
        <div className="text-slate-800 font-bold text-xl">{title}</div>
        <div className="text-blue-700 font-semibold text-md">{linkTo}</div>
    </div>
  )
}
