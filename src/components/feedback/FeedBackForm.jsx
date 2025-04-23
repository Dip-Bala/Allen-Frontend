import React from 'react'

export default function FeedBackForm() {
    return (
        <div className="bg-blue-50 p-5 rounded-xl w-[50%] shadow-xl">
            <h2 className="text-stone-900 text-xl font-semibold border-b border-white py-2">Request a Rollback</h2>
            <form className="grid grid-cols-2 gap-5 py-5"action="">
                <div className="flex flex-col text-stone-900 gap-2">
                    <label className="text-sm" >Student’s full name</label>
                    <input type="text" placeholder="Ex: Rohit Singh" required className="border-2 border-gray-400 p-2 text-light rounded-lg bg-white hover:border-black"/>
                </div>
                <div className="flex flex-col text-stone-900 gap-2">
                    <label className="text-sm" aria-required>Mobile Number</label>
                    <input placeholder="Ex: +914039275904" className="border-2 border-gray-400 p-2 text-light rounded-lg bg-white hover:border-black"/>
                    
                </div>
                <div className="flex flex-col text-stone-900 gap-2">
                    <label className="text-sm">Class</label>
                    <select className="border-2 border-gray-400 p-2 text-light rounded-lg bg-white hover:border-black">
                        <option>6th</option>
                        <option>7th</option>
                        <option>8th</option>
                        <option>9th</option>

                    </select>
                </div>
                <div className="flex flex-col text-stone-900 gap-2">
                    <label className="text-sm">Goals</label>
                    <select className="border-2 border-gray-400 p-2 text-light rounded-lg bg-white hover:border-black">
                        <option>NEET</option>
                        <option>JEE ADVANCED</option>
                        <option>PNCF</option>
                        <option>CUET</option>

                    </select>
                </div>
                <div className="flex flex-col text-stone-900 gap-2">
                    <label className="text-sm">Preffered Courses</label>
                    <select className="border-2 border-gray-400 p-2 text-light rounded-lg bg-white hover:border-black">
                        <option>Online Courses</option>
                        <option>Classroom Courses</option>
                        <option>Online Test Series</option>
                    </select>
                </div>
                <div className="flex flex-col text-stone-900 gap-2">
                    <label className="text-sm">State</label>
                    <select className="border-2 border-gray-400 p-2 text-light rounded-lg bg-white hover:border-black">
                        <option>Andaman & Nicobar Islands</option>
                        <option>Delhi</option>
                        <option>West Bengal</option>

                    </select>
                </div>
            </form>
            <p className="text-center text-sm ">By continuing, you agree to our Terms&Conditions</p>
            <div className="flex justify-center py-2">
            <button className="bg-blue-700 rounded-3xl text-white font-semibold font-md py-2 w-70 cursor-pointer">Submit</button>

            </div>
        </div>
    )
}
