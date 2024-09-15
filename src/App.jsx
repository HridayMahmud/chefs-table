import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header/Header'
import Banner from './Banner/Banner'
import Recipies from './Recipies/Recipies'
import Blogs from './Blogs/Blogs'

function App() {


  return (
    <>
    <div className='w-[600px] mx-auto md:w-[1220px]  py-12 '>
      <div>
      <Header></Header>
      <Banner></Banner>
      <Recipies></Recipies>
      <Blogs></Blogs>
      </div>
    </div>
    </>
  )
}

export default App
