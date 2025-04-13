import React, {useEffect, useState} from 'react'
import Advantages from './containers/Advantages';
import Features from './containers/Features';
import Feedback from './containers/Feedback';
import Footer from './containers/Footer';
import FreeTools from './containers/FreeTools';
import Navbar from './containers/Navbar';
import OnlineCourses from './containers/OnlineCourses';
import Results from './containers/Results';
import Scholarship from './containers/Scholarship';
import Testimonial from './containers/Testimonial';
import Trending from './containers/Trending';
import PopUp from './containers/PopUp';

const style ={
    display: "flex",
    flexDirection : "column",
    alignItems : "center",
    backgroundColor: "pink"
}
export default function Layout() {
    // const [popUp, showPopUp] = useState(true);
    // useEffect(() => {
    //     setInterval(() => {
    //         showPopUp(popUp => !popUp)
    //     }, 10000)
    // }, [])
  return (
    <div style={style}>
        {/* {popUp && <PopUp showPopUp={showPopUp}/>} */}
        <Navbar/>
        <Scholarship/>
        <OnlineCourses/>
        <Features/>
        <Trending/>
        <FreeTools/>
        <Results/>
        <Advantages/>
        <Testimonial/>
        <Feedback/>
        <Footer/>
    </div>
  )
}
