import React from 'react'

import search from './../assets/Images/search.png'
import profileicon from './../assets/Images/profileicon.png'

const Header = () => {
  return (
    <div className='py-14 '>
     <div className='header flex flex-col md:flex-row justify-center gap-5 md:gap-[170px] items-center'>
      <div className="recipi-container  w-[250px]">
      <h1 className='text-3xl  font-bold'>Recipe Calories</h1>
      </div>
      <div className='ancor flex gap-8'>
       <a href="#">Home</a>
       <a href="#">Recipes</a>
       <a href="#">About</a>
       <a href="#">Seacrch</a>
      </div>
     <div className="searchandprofile-container flex gap-2 justify-center  items-center">
     <div className=" search w-64 bg-[#150B2B0D] rounded-[50px] py-2 px-9 ">
              <div className=" flex gap-2 items-center">
              <img className=' w-[18px] h-[18px] ' src={search} alt="" />
             <input className='  w- outline-0 w-[180px] bg-transparent ' type="search" name="" id="" placeholder='search' />

              </div>
      </div>
      <img className='w-12' src={profileicon} alt="" />
     </div>
     </div>
    </div>
  )
}

export default Header
