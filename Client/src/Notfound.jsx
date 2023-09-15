/* eslint-disable no-unused-vars */
import React from 'react'
import { BrowserRouter as Router, Route, NavLink , useNavigate, Routes } from 'react-router-dom'
import App from './App'

function Notfound() {
    const navigate = useNavigate()
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238] mt-5">
	<h1 className="font-extrabold tracking-widest text-white text-9xl">404</h1>
	<div className="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute">
		Page Not Found
	</div>
	<button className="mt-5"  onClick={()=>{navigate(`/`)}}>
      <a
        className="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring"
      >
        <span
          className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"
        ></span>

        <span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
          Go Home
        </span>
      </a>
    </button>
    </div>
  )
}

export default Notfound