import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { RxHamburgerMenu } from 'react-icons/rx'
import SearchRecipes from '../search-recipe/SearchRecipes'
import Logo from '../logo/Logo'
import "./header.scss"

const Header = () => {
    return (
        <header id='header' className='header'>
           <Container>
           <div className="logo">
            <Logo width={100}/>
           </div>
           <div className="search">
            <SearchRecipes/>
           </div>
           <div className="burger">
            <RxHamburgerMenu/>
           </div>
           </Container>
        </header>
    )
}

export default Header
