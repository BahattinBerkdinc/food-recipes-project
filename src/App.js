
import './App.css';
import Banner from './components/banner/Banner';
import Header from './components/header-comp/Header';
import RecipeCategories from './components/recipe-categories/RecipeCategories';
import Spacer from './components/spacer/Spacer';
import SpecialRecipes from './components/special-recipes/SpecialRecipes';
// import axios from 'axios';
// import { Button, Form } from 'react-bootstrap';
// import Loading from './components/loading/Loading';
// import { useDispatch, useSelector } from 'react-redux';
// import { getRecipes } from './redux/recipesAllSlice';
// import { useEffect } from 'react';

function App() {
  

  // const dispatch =useDispatch();
  // const store = useSelector((state)=>state.recipes.recipes)
  // console.log(store);

  // useEffect(()=>{
  //   dispatch(getRecipes())
  // })

 
  

  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Spacer height={100}/>
      <SpecialRecipes/>
      <Spacer/>
      <RecipeCategories/>
    </div>
  );
}

export default App;
