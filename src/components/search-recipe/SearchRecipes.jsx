import React from 'react'
import { Button, Form } from 'react-bootstrap'
import "./searchrecipes.scss"
const SearchRecipes = () => {
  return (
    <Form className='form-search-recipes'>
        <Form.Group className='d-flex w-100'>
            <Form.Control className='form-control' type="text" placeholder="Search Recipes" />
            <Button className='search-btn'>Search</Button>
        </Form.Group>
    </Form>
  )
}

export default SearchRecipes
