import React from 'react'

const Showingblog = ({addedblog}) => {
              
              
       const preparing=()=>{
               console.log('clicked');
       }

  return (
    <div>
       <div className='w-[420px] border-2 mt-12 rounded-2xl'>
        <h1 className='text-xl text-center mt-8 mb-4 font-medium'>Want to cook:{addedblog.length}</h1>
        <div className="flex justify-around">
          <p>Name</p>
          <p>Time</p>
          <p>Calories</p>
        </div>
        <div>
               {
       addedblog.map(detail=><ul key={addedblog.id}  className='bg-[#28282808] p-4 mb-1  text-[#282828B3] flex  justify-around items-center'>
              
               <li className='text-center'>{detail.recipe_name}</li>
               <li>{detail.preparing_time}</li>
               <li>{detail.calories}</li>
               <li><button onClick={preparing}   className='bg-[#0BE58A] px-4 py-2 rounded-[50px]' type="button">preparing</button></li>
       </ul>)
               }
        </div>
        <hr></hr>

      </div>
    </div>
  )
}

export default Showingblog
