import React, { useEffect, useState } from 'react'
import Blog from './Blog';

const Blogs = ({addedItems,alreadyadded}) => {
 

 
       const [blogs,setblogs]= useState([]);
       useEffect(()=>{
       const fetchdata = async()=>{
               const res = await fetch('Data.json');
               const data = await res.json();
               
               setblogs(data);
       }
       
       fetchdata();
       },[]) 
  return (
  <div>
      <div className='grid grid-cols-1 md:grid-cols-2   gap-6 mt-12'>
      {
        blogs.map(blog=>
        <Blog key={blog.id} blog={blog}
        addedItems={addedItems}
        alreadyadded={alreadyadded}
         ></Blog>)
      }
    </div>
     
  </div>
  )
}

export default Blogs
