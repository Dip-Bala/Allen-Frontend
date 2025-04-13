import React from 'react'

const style={
  height: "20vh",

}
export default function Navbar() {
  return (
    <div style = {style}>
      <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
        <div>
          {/* <img src="" alt="" /> */}
          ALLEN
        </div>
        <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
          <div>Courses</div>
          <div>Test Series</div>
          <div>Results</div>
          <div>Study Material</div>
          <div>Books</div>
          <div>More</div>
        </div>
        <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
          <div>Call</div>
          <div>Login</div>
        </div>
      </div>
      <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <span>
        <img src="https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1600,f_avif,q_auto/v1742470106/mgdwn6mv7zfwxiopuntt.png?_upload_ref=ic_img_tool&__ar__=1.00" alt="clock"  style={{width:20}}/>
        BATCHES START 16 APR 
        </span>
        <span>Win upto 90% AOSAT scholarship  <img src="https://res.cloudinary.com/dpzpn3dkw/image/upload/w_400,f_auto,q_auto/v1733741024/lpbkzdbke54wl6cevwjo.svg?_upload_ref=ic_img_tool&__ar__=1.06" alt="clock"  style={{width:20}}/>. Register for FREE</span>
      </div>
    </div>
  )
}
