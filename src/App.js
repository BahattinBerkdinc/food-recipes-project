
// import axios from 'axios';
import './App.css';
import Header from './components/header-comp/Header';
import SpecialRecipes from './components/special-recipes/SpecialRecipes';
// import { Button, Form } from 'react-bootstrap';
// import Loading from './components/loading/Loading';
// import { useDispatch, useSelector } from 'react-redux';
// import { getRecipes } from './redux/recipesAllSlice';

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
      <SpecialRecipes/>
    </div>
  );
}

export default App;
