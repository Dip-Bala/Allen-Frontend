import React from 'react'
import FeedBackForm from '../components/feedback/FeedBackForm'

export default function Feedback() {
  return (
    <div className="flex justify-center gap-7 p-20">
      <div className="w-[300px]">
        <img src="https://res.cloudinary.com/dpzpn3dkw/image/upload/w_800,f_avif,q_auto/v1730878962/oqfy1klihlgn0vmpy77w.webp?_upload_ref=ic_img_tool" alt="" />
      </div>
      <FeedBackForm/>
    </div>
  )
}
