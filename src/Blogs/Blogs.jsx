import React, { useEffect, useState } from 'react'
import Blog from './Blog';

const Blogs = () => {
       const [blogs,setblogs]= useState([]);
       useEffect(()=>{
       const fetchdata = async()=>{
               const res = await fetch('Data.json');
               const data = await res.json();
               console.log(data);
               setblogs(data);

               
       }
       
       fetchdata();
       },[])     
  return (
    <div>
      {
        blogs.map(blog=>
        <Blog blog={blog} key={blog.id} ></Blog>)
      }
    </div>
  )
}

export default Blogs
