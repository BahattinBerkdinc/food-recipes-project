import React from 'react'
import "./recipecategorycard.scss"
const RecipeCategoryCard = ({category}) => {
  return (
    <div className='recipe-category-card h-100'>
        <img src={require(`../../assets/images/category-images/${category.image}`)} alt="" />
        <h1 className="category-name">{category.name}</h1>
    </div>
  )
}

export default RecipeCategoryCard
