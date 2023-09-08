import React from 'react'
import "./recipecategories.scss"
import {Col, Container, Row } from 'react-bootstrap'
import RecipeCategoryCard from '../recipe-category-card/RecipeCategoryCard'
import Spacer from "../spacer/Spacer"
import categoriesData from "../../data/categories.json"
const RecipeCategories = () => {
  return (
    <Container>
      <Spacer height={150}/>
      <Row>
        {
          categoriesData.map((category)=>(
            <Col xs={6} key={category.id}>
              <RecipeCategoryCard category={category}/>
            </Col>
          ))
        }
      </Row>
    </Container>
  )
}

export default RecipeCategories
