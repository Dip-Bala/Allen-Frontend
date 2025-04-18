import React, {useState} from 'react'
import Login from './Login';

const style={
  height: "100px",
  backgroundColor: "white",
  width: "100vw",
  fontFamily:"sans-serif"
}
const upperStyle = {
  display: "flex", 
  justifyContent: "space-between", 
  alignItems: "center", 
  backgroundColor: "skyblue", 
  padding: 20
}
export default function Navbar() {
  const [isLogin, setIsLogin] = useState(false);
  function showLogin(){
    setIsLogin(!isLogin);
  }
  return (
    <div className="flex flex-col bg-white w-full fixed">
      <div className="flex px-5 py-4 items-center justify-between">
        <div className="flex gap-8 items-center">
        <div className="w-auto h-6 flex">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/ALLEN_Career_Institute_logo.svg/2560px-ALLEN_Career_Institute_logo.svg.png" alt="Allen-logo" />
        </div>
        <div className="flex gap-10 text-base font-normal">
          <div className="hover:border-b-4 border-blue-600">Courses</div>
          <div className="hover:border-b-4 border-blue-600">Test Series</div>
          <div className="hover:border-b-4 border-blue-600">Results</div>
          <div className="hover:border-b-4 border-blue-600">Study Material</div>
          <div className="hover:border-b-4 border-blue-600">Books</div>
          <div className="hover:border-b-4 border-blue-600">More</div>
        </div>
        </div>
        <div className="flex gap-5">
          <div className="bg-blue-700 p-3 rounded-full"><img className="w-4"src="../src/assets/phone-call.png" alt="call" /></div>
          <div onClick={showLogin} className="border-2 border-blue-700 rounded-3xl text-black text-sm px-4 py-2 font-semibold cursor-pointer">Login</div>
          {isLogin && <Login setIsLogin={setIsLogin}/>}
        </div>
      </div>
      <div className="flex bg-emerald-600 py-1 text-sm justify-center font-medium items-center gap-5">
        <span className="flex content-center items-center text-yellow-300 ">
        <img src="https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1600,f_avif,q_auto/v1742470106/mgdwn6mv7zfwxiopuntt.png?_upload_ref=ic_img_tool&__ar__=1.00" alt="clock" className="w-7"/>
        BATCHES START 16 APR 
        <img src="https://res.cloudinary.com/dpzpn3dkw/image/upload/w_400,f_auto,q_auto/v1733741024/lpbkzdbke54wl6cevwjo.svg?_upload_ref=ic_img_tool&__ar__=1.06" alt="clock"  className="w-7"/>
        </span>
        <span className="text-white font-base text-sm">Win upto 90% AOSAT scholarship. Register for FREE</span>
      </div>
    </div>
  )
}


