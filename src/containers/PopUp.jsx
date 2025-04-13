import React from 'react'

export default function PopUp({showPopUp}) {
    function cancelPopUp(){
        showPopUp(curr => !curr)
    }
  return (
    <div style={{width: 500, height: 500, position: "absolute", top: 150, left: 450, backgroundColor: "gray", borderRadius:10, textAlign: "center"}}>
        <button onClick={cancelPopUp}>cancel</button>

    </div>
  )
}
