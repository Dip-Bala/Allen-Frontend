import React from 'react'

export default function PopUp({showPopUp}) {
    function cancelPopUp(){
        showPopUp(curr => !curr)
    }
  return (
    <div className="absolute top-3/12 w-[500px] h-[500px] rounded-xl bg-emerald-500 p-10">
        <button className="w-5 h-5" onClick={cancelPopUp}><img src="./src/assets/close.png" alt="cancel" /></button>

    </div>
  )
}
