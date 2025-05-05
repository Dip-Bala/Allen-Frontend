import React from 'react'
// import Carousal from '../components/scholarship/Carousal'
export default function Scholarship() {
  return (
    <div className="bg-slate-100 md:w-full md:flex md:align-center md:justify-center md:py-10 md:gap-20">
      <div className="md:flex md:flex-col md:gap-12 md:w-[35%] ">
        <div className="text-4xl text-wrap font-bold tracking-wide">
        Get up to 90% scholarship on ALLEN Courses
        </div>
        <div className="flex flex-col gap-4">
          <div className="text-xl font-semibold">
          Register for scholarship
          </div>
          <div className="flex md:gap-4 md:text-sm md:font-medium">
            <button className="border-2 border-blue-700 rounded-4xl md:px-2 md:py-2 hover:bg-gray-300 cursor-pointer">Online Classes</button>
            <button className="border-2 border-blue-700 rounded-4xl md:px-2 py-2 hover:bg-gray-300 cursor-pointer">Offline Classes</button>
          </div>
        </div>
      </div>
      <div className="w-[30%]">
        <img src="https://res.cloudinary.com/dpzpn3dkw/image/upload/w_800,f_avif,q_auto/v1733911179/m6l4kbtrdldjtbbzuyrk.webp?_upload_ref=ic_img_tool&__ar__=1.78" className="h-[80%]"></img>
      </div>
    </div>
  )
}
