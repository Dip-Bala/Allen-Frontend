import React from 'react'
import FreeToolCard from '../components/freeTools/FreeToolCard'
export default function FreeTools() {
  return (
    <div className="flex flex-col align-center justify-center py-10 w-full gap-5 bg-slate-100">
      <div className="text-2xl ml-[16%] font-semibold text-slate-900">Free tools for JEE Aspirants</div>
      <div className="flex justify-center gap-10">
        <FreeToolCard title={"JEE Main-Percentile Predictor"} img={"https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1600,f_auto,q_auto/v1738050758/vqlzquv4ypnjlhf7zd61.png?_upload_ref=ic_img_tool&__ar__=1.68"} linkTo={"Predict Now"} />
        <FreeToolCard title={"JEE Main - Rank Predictor"} img={"https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1600,f_auto,q_auto/v1738050810/uvfjnf35zedfyb3bnfwb.png?_upload_ref=ic_img_tool&__ar__=1.67"} linkTo={"Predict Now"} />
        <FreeToolCard title={"JEE Main - Answer Key"} img={"https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1600,f_auto,q_auto/v1738050699/yxiygqxy4vopkw6hwcad.png?_upload_ref=ic_img_tool&__ar__=1.68"} linkTo={"Predict Now"} />
      </div>
    </div>
  )
}
