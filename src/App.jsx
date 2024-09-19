import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header/Header'
import Banner from './Banner/Banner'
import Recipies from './Recipies/Recipies'
import Blogs from './Blogs/Blogs'
import Showingblog from './Showblog/Showingblog'

function App() {
 const [addedblog,setaddedblog] = useState([]);

 const addedItems=(blog,id)=>{
  const newblog=[...addedblog,blog];
  setaddedblog(newblog);

 }
 const alreadyadded=(id)=>{
  const alreadyadded = addedblog.filter(item=>item.id===id);

  console.log(alreadyadded.length);
  if(alreadyadded.length>0){
    alert('already added')
  }

  
 }
 

  return (
    <>
    <div className='w-[600px] mx-auto md:w-[1220px]  py-12 '>
      <div>
      <Header></Header>
      <Banner></Banner>
      <Recipies></Recipies>
      <div className="flex flex-col md:flex-row gap-6">
      <Blogs addedItems={addedItems} 
    alreadyadded={alreadyadded}
      ></Blogs>
      <Showingblog addedblog={addedblog} ></Showingblog>
      </div>
      </div>
    </div>
    </>
  )
}

export default App
