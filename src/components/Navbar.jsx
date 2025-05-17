import React from 'react'

function Navbar() {
  return (
    <nav className="rounded-xl transition-all duration-500 ease-in-out w-96 hover-shadow-pink-400/50 hover:w-[28rem] h-[40px] flex gap-4 justify-center items-center border-2 border-neutral-300 bg-black text-white shadow-lg shadow-pink-500/50">
  <ul className="flex gap-4">
    <ul  className='text-white  hover:text-amber-300  py-1    '> {"<> "} </ul>
    <li><button className="rounded hover:scale-105 transition hover:text-neutral-400 py-1">Home</button></li>
    <li> <button className="rounded   py-1  text-shadow-amber-400/50  text-gray-100 shadow-2xl hover:text-pink-400 transition-all hover:scale-105">
  Home
</button>
  </li> 
<li className='text-white hover:cursor-grab hover:text-amber-300  py-1 '>{"</>"} </li>
  </ul>
  <ReButton styleType='pink ' > Contact </ReButton>
</nav>
  )
}

export default Navbar