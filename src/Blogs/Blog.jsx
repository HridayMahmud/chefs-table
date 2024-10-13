import React from 'react'
import foodimage from '../assets/Images/beef-chaomi.jpg'
import time from '../assets/Images/time.png'
import cal from '../assets/Images/calory.png'
const Blog = ({blog,addedItems,alreadyadded}) => {
               const{id,recipe_image,recipe_name,short_description,ingredients,total_ingredients,preparing_time,calories} = blog;
  return (
    <div  className='mb-4 '>
      <div className='food shadow-xl shadwow-gray-300  container w-[380px] h-[750px] rounded-2xl p-6  border-2 '>
             <img className='w-[330px]  h-[200px]   rounded-2xl mb-6 ' src={recipe_image} alt="" /> 
             <h1 className="text-xl font-semibold text-[#282828] mb-4">{recipe_name}</h1>
            <p className="text-[16px] font-normal text-[#878787] mb-6">{short_description}</p>
            <div className="prosandcons h-[370px]   text-xl font-medium">
              <h1 className='text-[#282828] mb-4 '>Ingredients: {total_ingredients}</h1>
              <ol className='list-disc  h-[180px]  mb-5 text-[18px] px-6 text-[#878787]'>
                {
                  ingredients.map(ingredient=><li>{ingredient}</li>)
                }
              </ol>
              <hr></hr>
              <div className="min-cal flex justify-between  w-[320px]  text-[#282828CC]">
                <div className="time text-[18px] gap-2 flex justify-center items-center">
                  <img className='w-[30px] py-3' src={time} alt="" />
                  <p>{preparing_time}</p>
                </div>

                <div className="calory  gap-2 text-[18px] flex justify-center items-center">
                  <img className='w-[30px] py-3' src={cal} alt="" />
                  <p className='inline-block'>{calories}</p>
                </div>
           
              </div>
             <button onClick={()=>{addedItems(blog),alreadyadded(id)}} className='bg-[#0BE58A] px-6 py-3 rounded-[50px]' type="button">Want to Cook</button>
            </div>
      </div>
    </div>
  )
}

export default Blog
