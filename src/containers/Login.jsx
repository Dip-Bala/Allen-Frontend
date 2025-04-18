import React from 'react'
import OnlineCourses from './OnlineCourses';

export default function Login({ setIsLogin }) {
    function showLogin() {
        setIsLogin(login => !login);
    }
    return (
        <div className="absolute bg-white shadow-xl/20  h-full w-[500px] right-0 top-0 p-12 pt-20 flex flex-col justify-between">
            <div className="flex gap-6">
                <button className="w-5 h-5" onClick={showLogin}><img src="./src/assets/close.png" alt="cancel" /></button>
                <div className="w-auto h-6 flex">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/ALLEN_Career_Institute_logo.svg/2560px-ALLEN_Career_Institute_logo.svg.png" alt="Allen-logo" />
                </div>
            </div>
            <form className="flex flex-col gap-4">
                <label className="text-2xl font-bold text-stone-800">Login with mobile number</label>
                <input type="text" placeholder='Enter 10-digit mobile number' className="border-2 border-gray-300 rounded-md p-2.5 w-full text-black font-light hover:border-black"/>
                <button className="bg-gray-200 rounded-3xl p-2.5 w-full hover:border-black text-gray-400 font-semibold cursor-not-allowed">Send OTP</button>
                <div className="text-center">or</div>
                <div className="flex flex-col gap-4">
                    <button className="border-2 border-blue-600 rounded-3xl p-2.5 w-full hover:bg-gray-300 text-black font-medium ">Continue with Form ID</button>
                    <button className="border-2 border-blue-500 rounded-3xl p-2.5 w-full hover:bg-gray-300 text-black font-medium ">Continue with Email ID</button>

                </div>
            </form>
            <div className="border-t border-gray-200 py-2 text-sm">
      By continuing you are accepting our privacy <b>policy</b> and <b>T&C</b>
      </div>
        </div>
    )
}
