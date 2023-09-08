import React from 'react'
import { Button, Container } from 'react-bootstrap'
import "./specialrecipes.scss"
import Spacer from '../spacer/Spacer'
const SpecialRecipes = () => {
  return (
    <Container>
        <Spacer />
        <div className="special-recipes">
            <div className="first-img img-box">
                <img src={require("../../assets/images/foods/pic1.jpg")} alt="" />
                <div className="img-content">
                    <h1>Lorem, ipsum.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit architecto facere voluptatibus tenetur odio ex temporibus alias recusandae ratione! Aut?</p>
                    <Button className='button-main'>Read More</Button>
                </div>
            </div>
            <div className="second-img img-box">
                <img src={require("../../assets/images/foods/pic2.jpg")} alt="" />
                <div className="img-content">
                    <h1>Lorem, ipsum.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit architecto facere voluptatibus tenetur odio ex temporibus alias recusandae ratione! Aut?</p>
                    <Button className='button-main'>Read More</Button>
                </div>
            </div>
            <div className="third-img img-box">
                <img src={require("../../assets/images/foods/pic3.jpg")} alt="" />
                <div className="img-content">
                    <h1>Lorem, ipsum.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit architecto facere voluptatibus tenetur odio ex temporibus alias recusandae ratione! Aut?</p>
                    <Button className='button-main'>Read More</Button>
                </div>
            </div>
            <div className="fourth-img img-box">
                <img src={require("../../assets/images/foods/pic4.jpg")} alt="" />
                <div className="img-content">
                    <h1>Lorem, ipsum.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit architecto facere voluptatibus tenetur odio ex temporibus alias recusandae ratione! Aut?</p>
                    <Button className='button-main'>Read More</Button>
                </div>
            </div>
        </div>
    </Container>
  )
}

export default SpecialRecipes
