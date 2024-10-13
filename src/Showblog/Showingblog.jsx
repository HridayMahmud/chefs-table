import React, { useState } from 'react'

const Showingblog = ({addedblog,preparing,cookeditem}) => {
              
  const [calory,setcalory] = useState([]);
  const [time,settime] = useState([]);
  
  let list =1;
  let totaltime = 0;
  let totalcolories = 0;
  for(let i=0;i<cookeditem.length;i++){
    totaltime = totaltime + cookeditem[i].preparing_time;
    totalcolories = totalcolories + cookeditem[i].calories;

  }

  return (
    
    <div>
       <div className='w-[420px] border-2 mt-12 rounded-2xl'>
        <h1 className='text-2xl text-center mt-8 mb-4 font-bold'>Want to cook:{addedblog.length}</h1>
        <div className="flex justify-around">
      
          <p>Name</p>
          <p>Time</p>
          <p>Calories</p>
        </div>
        <div>
               {
                
       addedblog.map(detail=><ul key={addedblog.id}  className='bg-[#28282808] p-4 mb-1  text-[#282828B3] flex  justify-around items-center'>
               <li className='text-black font-bold '>{list++}</li>
               <li className='text-center'>{detail.recipe_name}</li>
               <li>{detail.preparing_time} minutes</li>
               <li>{detail.calories} calories</li>
               <li><button onClick={()=>preparing(detail)}   className='bg-[#0BE58A] px-4 py-2 rounded-[50px]' type="button">preparing</button></li>
       </ul>)
              }
               <hr></hr>
       <div className="mt-3">
       <h1 className='text-2xl font-bold text-center'>Currently cooking:{cookeditem.length}</h1>  
        <div className="flex justify-around mb-4">
          
          <p>Name</p>
          <p>Time</p>
          <p>Calories</p>
        </div>
        <hr></hr>
       </div>

      <div className='cookeditem bg-[#28282808] p-4 mb-1  text-[#282828B3] flex  justify-center gap-2 items-center'>
       
        <h1>total Time = {totaltime}</h1>
        <h1>Total Calories = {totalcolories}</h1>
      
      </div>
        </div>
       

      </div>
  

    </div>
  )
}

export default Showingblog
