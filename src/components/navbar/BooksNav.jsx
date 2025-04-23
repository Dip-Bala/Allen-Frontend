import React, {useState} from 'react'

export default function BooksNav() {
  const [showCourses, setShowCourses] = useState(false);
  return (
    <div>
    <div className="border-b-4 border-white hover:border-b-blue-600 hover:border-solid relative cursor-pointer" onMouseOver={()=> setShowCourses(true)} onMouseOut={()=> setShowCourses(false)}>Books</div>
    {showCourses && <CoursesList setShowCourses={setShowCourses}/>}
    </div>
  )
}

function CoursesList({setShowCourses}){
  return (
    <div className="p-4 flex flex-col rounded-xl shadow-lg w-[250px] absolute align-center bg-white text-sm gap-2" onMouseOver={()=> setShowCourses(true)} onMouseOut={()=> setShowCourses(false)}>
      <div className="flex justify-between hover:bg-gray-100 w-full rounded-md align-center p-2 cursor-pointer">
        <div className="flex align-center">ALLEN e-Store</div>
        <img className=" h-5 text-black"src="https://res.cloudinary.com/dpzpn3dkw/image/upload/w_800,f_avif,q_auto/v1731073629/bymo8br5tzitwj8v2yx7.svg?_upload_ref=ic_img_tool"/>
      </div>
    </div>
  )
}
