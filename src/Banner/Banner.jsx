import React from 'react'
import img from '../assets/Images/chef.jpg'
const Banner = () => {
  return(
    <div   style={{backgroundImage:`url(${img})`,backgroundSize:"cover",backgroundPosition:"center;",backgroundRepeat:"no-repeat;",height:"600px;",borderRadius:"24px"}} className='banner-container m-auto w-[400px]  md:w-full px-2 md:px-48  mb-24 py-32 text-center'>
      <div  className="banner-text-container  text-white  ">
      <h1 className='text-[20px] md:text-[52px] font-bold mb-6'>Discover an exceptional cooking class tailored for you!</h1>
      <p className='text-[18px] font-normal mb-10'>A chef is a culinary professional who is skilled in preparing, cooking, and presenting food. They often specialize in a particular type of cuisine or cooking technique. Chefs are responsible for creating menus, selecting ingredients, and ensuring the quality of dishes</p>
      <div className='banner-button font-semibold'>
               <button className='bg-[#0BE58A] text-black px-8 py-5 rounded-[50px] mr-8 ' type='button'>Explore Now</button>
               <button className='bg-transparent text-white px-8 py-5 rounded-[50px] border-2' type='button'>Our Feedback</button>

      </div>
      </div>
    </div>
  )
}

export default Banner
