import React from 'react'
import CoursesCard from '../components/onlineCourses/CoursesCard'

export default function OnlineCourses() {
  return (
    <div className="flex flex-col justify-center py-10 gap-5 ">
      <h2 className="ml-[15%] text-2xl font-semibold text-slate-800">Discover the perfect online course</h2>
      <div className="flex justify-center gap-6">
      <CoursesCard title={"JEE"} img={"https://res.cloudinary.com/dpzpn3dkw/image/upload/v1729079766/jee_vd0eql.webp"} linkTo={"View"} />
      <CoursesCard title={"NEET"} img={"https://res.cloudinary.com/dpzpn3dkw/image/upload/v1729079856/U_neet_ngbo57.webp"} linkTo={"View"} />
      <CoursesCard title={"Class 6-10"} img={"https://res.cloudinary.com/dpzpn3dkw/image/upload/v1729079855/grade_6_10_ilhkeb.webp"} linkTo={"View"}/>
      </div>
    </div>
  )
}
