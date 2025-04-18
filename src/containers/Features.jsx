import React from 'react'
import FeaturesCard from '../components/features/FeaturesCard.jsx'

const features = [
  {
    img: "https://res.cloudinary.com/dpzpn3dkw/image/upload/f_avif/v1731489047/1_dfic0f.svg",
    title: "Kota Faculty",
    description: "Expert faculty, top-notch study material and teaching methods perfected in Kota over 35+ years"
  },
  {
    img: "https://res.cloudinary.com/dpzpn3dkw/image/upload/f_avif/v1731489326/2_ddboz0.svg",
    title: "Proven Results",
    description: "Stellar results delivered through Online Courses across JEE, NEET, Olympiads and 10th Board Exams"
  },
  {
    img: "https://res.cloudinary.com/dpzpn3dkw/image/upload/f_avif/v1731489375/3_ivbkv8.svg",
    title: "Learning Tools",
    description: "24x7 doubt resolution and customized study material to test, and improve continuously"
  },
  {
    img: "https://res.cloudinary.com/dpzpn3dkw/image/upload/f_avif/v1731489375/4_ar5ewd.svg",
    title: "Mentor Support",
    description: "Regular mentorship sessions with faculty, guidance on exam strategy and updates to parents"
  }
]
export default function Features() {
  return (
    <div className="flex flex-col align-center justify-center py-15 px-20">
      <h2 className="text-2xl font-bold text-center">Why Allen Online</h2>
      <div className="flex justify-center gap-5 py-10 px-20">
        {features.map((item, index) => {
          console.log(item);
          return (<FeaturesCard image={item.img} title={item.title} description={item.description} />)
        })}
      </div >
      <div className="flex justify-center">
      <button className="text-white text-md font-semibold bg-blue-700 rounded-4xl p-2 w-[20%] cursor-pointer">Explore Online Courses</button>

      </div>
    </div>
  )
}
