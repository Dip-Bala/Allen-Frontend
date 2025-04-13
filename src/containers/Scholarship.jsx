import React from 'react'

const parentStyle = {
  height: 250,
  width: "100vw",
  backgroundColor: "lightgray",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: 100,
  paddingLeft : 200,
  paddingRight : 200,
  fontWeight:600

  
}
export default function Scholarship() {
  return (
    <div style={parentStyle}>
      <div style={{width: "30%", display:"flex", flexDirection: "column", gap: 10}}>
        <div style={{fontSize: 30}}>
        Get up to 90% scholarship on ALLEN Courses
        </div>
        <div style={{display:"flex", flexDirection: "column", gap: 10}}>
          <div style={{fontSize: 20}}>
          Register for scholarship
          </div>
          <div style={{display:"flex", gap: 10}}>
            <button style={{padding: 10, border: "2px solid blue", fontSize: 16, fontWeight: 500, borderRadius: 20}}>Online Classes</button>
            <button style={{padding: 10, border: "2px solid blue", fontSize: 16, fontWeight: 500, borderRadius: 20}}>Offline Classes</button>
          </div>
        </div>
      </div>
      <div style={{width: "30%"}}>
        <img src="https://res.cloudinary.com/dpzpn3dkw/image/upload/w_800,f_avif,q_auto/v1733911179/m6l4kbtrdldjtbbzuyrk.webp?_upload_ref=ic_img_tool&__ar__=1.78" style={{height: 200}}></img>
      </div>
    </div>
  )
}
