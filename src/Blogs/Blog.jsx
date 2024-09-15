import React from 'react'

const Blog = ({blog}) => {
               const{recipe_image,recipe_name,short_description,ingredients,preparing_time,calories} = blog;
  return (
    <div>
      <div>
              <h1>recipe_name:{recipe_name}</h1> 
      </div>
    </div>
  )
}

export default Blog
