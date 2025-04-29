import React from 'react'

export default function Footer() {
  return (
    <div className="flex  flex-col gap-10 w-full bg-blue-50 py-10 px-60 text-gray-600">
      <div className="cursor-pointer">
        <img src="https://res.cloudinary.com/dpzpn3dkw/image/upload/f_avif/v1731483494/light_sx6iyk.webp" alt=""/>
      </div>
      <div className="flex justify-between">
        <div className="cursor-pointer">About</div>
        <div className="cursor-pointer">Help&Support</div>
        <div className="cursor-pointer">Popular goals</div>
        <div className="cursor-pointer">Courses</div>
        <div className="cursor-pointer">Centers</div>
        <div className="cursor-pointer">Exam Information</div>
      </div>
      <div className="flex justify-between border-t border-gray-300 py-10">
        <div className="flex flex-col gap-3">
          <div>
            socials
          </div>
          <div>ALLEN Career Institute Pvt. Ltd. © All Rights Reserved.</div>
        </div>
        <div className="w-10 h-10"><img src="https://res.cloudinary.com/dpzpn3dkw/image/upload/w_120,f_avif,q_auto/v1738753226/riir9wdiqn81z2vaadny.webp?_upload_ref=ic_img_tool&__ar__=1.00" alt="" /></div>
      </div>
    </div>
  )
}
