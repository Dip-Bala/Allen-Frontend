import React, { useEffect, useState } from 'react'
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

export default function Layout() {
  const [popUp, showPopUp] = useState(true);
  // useEffect(() => {
  //     setInterval(() => {
  //         showPopUp(popUp => !popUp)
  //     }, 10000)
  // }, [])
  return (
    <div className="flex flex-col items-center">
      {popUp && <PopUp showPopUp={showPopUp} />}
      <Navbar />
      <div className="mt-27 w-full">
        <Scholarship />
        <OnlineCourses />
        <FreeTools />
        <Features/>
        {/* <Trending/>
        <Results/>
        <Advantages/>
        <Testimonial/> */}
        <Feedback/>
        <Footer/>
      </div>
    </div>
  )
}
