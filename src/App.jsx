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
 const [cookeditem,setcookeditem] = useState([]);

 const addedItems=(blog)=>{
  if(!addedblog.includes(blog)){
    setaddedblog([...addedblog,blog]);
  }
  // const newblog=[...addedblog,blog];
  // setaddedblog(newblog);
 }

 //alert-message
 const alreadyadded=(id)=>{
  if(addedblog.filter(item=>item.id===id).length>0){
   alert('Item already added');
  }
 }

 const preparing =(Prepared_item)=>{
  setaddedblog([]);
  setcookeditem([...cookeditem,Prepared_item]);
  console.log(Prepared_item);
 }
 

  return (
    <>
    <div className='w-[600px] mx-auto md:w-[1220px]  py-12 '>
      <div>
      <Header></Header>
      <Banner></Banner>
      <Recipies></Recipies>
      <div className="ml-[100px] md:ml-0 flex flex-col md:flex-row gap-6">
      <Blogs addedItems={addedItems} 
    alreadyadded={alreadyadded} 
      ></Blogs>
      <Showingblog addedblog={addedblog} cookeditem={cookeditem}  preparing={preparing} ></Showingblog>
      </div>
      </div>
    </div>
    </>
  )
}

export default App
