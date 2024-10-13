import React, { useState } from 'react'

const Showingblog = ({addedblog,preparing,cookeditem}) => {
              
  
  
  let list =1;
  let list2 = 1;
  let totaltime = 0;
  let totalcolories = 0;
  for(let i=0;i<cookeditem.length;i++){
    totaltime = totaltime + cookeditem[i].preparing_time;
    totalcolories = totalcolories + cookeditem[i].calories;

  }

  return (
    
    <div>
       <div className='w-[420px] px-1 border-2 mt-12 rounded-2xl'>
        <h1 className='text-xl text-center mt-8 mb-4 font-bold'>Want to cook:{addedblog.length}</h1>
        <div className="flex justify-around">
      
          <p>Name</p>
          <p>Time</p>
          <p>Calories</p>
        </div>
        <div className='mt-2'>
               {
                
       addedblog.map(detail=><ul key={addedblog.id}  className='bg-[#28282808] p-4 mb-1  text-[#282828B3] flex  justify-around items-center'>
               <li className=' font-semibold '>{list++}</li>
               <li className='text-center'>{detail.recipe_name}</li>
               <li>{detail.preparing_time} minutes</li>
               <li>{detail.calories} calories</li>
               <li><button onClick={()=>preparing(detail)}   className='bg-[#0BE58A] px-4 py-2 rounded-[50px]' type="button">preparing</button></li>
       </ul>)
              }
       <hr></hr>
       <div className="mt-2">
       <h1 className='text-xl font-bold text-center'>Currently cooking:{cookeditem.length}</h1>  
        <div className="flex justify-around mb-4">
          <p>Name</p>
          <p>Time</p>
          <p>Calories</p>
        </div>
       
      </div>

      <div className='mt-2'>
      {
      cookeditem.map(citem=><ul className='cookeditem bg-[#28282808] p-4 mb-1  text-[#282828B3] flex  justify-around items-center'>
        <li className=' font-semiblod'>{list2++}</li>
        <li>{citem.recipe_name}</li>
        <li>{citem.preparing_time} minutes</li>
        <li>{citem.calories} calories</li>
      </ul>)
      }
      </div>

      <div className='flex justify-center gap-3 items-center ml-[130px] mb-3'>
        
        <h1>Total preparation time = {totaltime} minutes</h1>
        <h1>Total Calories = {totalcolories} calories</h1>
      </div>
        </div>
       

      </div>
  

    </div>
  )
}

export default Showingblog
