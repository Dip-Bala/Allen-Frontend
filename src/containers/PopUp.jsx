import React from 'react'

export default function PopUp({showPopUp}) {
    function cancelPopUp(){
        showPopUp(curr => !curr)
    }
  return (
    <div className="absolute top-3/12 w-[500px] h-[500px] rounded-xl bg-emerald-500 p-10 flex flex-col justify-between">
        <button className="w-5 h-5 cursor-pointer" onClick={cancelPopUp}><img src="./src/assets/close.png" alt="cancel" /></button>
        <button className="border-2 bg-white border-blue-500 rounded-3xl p-2.5 w-full hover:bg-gray-300 text-black font-medium cursor-pointer ">Register For Free</button>
    </div>
  )
}
