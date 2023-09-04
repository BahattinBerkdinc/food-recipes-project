
import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Loading from './components/loading/Loading';

function App() {
  const [loading, setLoading] = useState(false);
  const [food,setFood] = useState([]);
  const [search,setSearch] = useState('');

  const apiKey = 'e1c5e1eb6455e0d47d816e8a4d0dbce4';
  const apiUrl = 'https://api.edamam.com/api/recipes/v2';

  const handleSearch = (e) => {
      const searchedFood = e.target.value;
      console.log(searchedFood);
      setSearch(searchedFood);
  }
  

  const getRecipes = async () => {
    try {
      const response = await axios.get(apiUrl, {
        params: {
          type: 'public',
          q: search, // Aramak istediğiniz tarifleri buraya yazın
          app_id: '0be44ea2', // Edamam API uygulama kimliği
          app_key: apiKey, // Edamam API anahtarı
        },
      });
  
      // API'den gelen verileri kullanabilirsiniz
      console.log(response.data);
      setFood(response.data.hits);
      setLoading(false);
    } catch (error) {
      // Hata durumunda hata mesajını işleyin
      console.error(error);
      setLoading(false);
    }
  };
   const getSearchedFood = () => {
    getRecipes();
    setLoading(true);
  }

 

 
  

  return (
    <div className="App">
      {
        loading ? <Loading /> : (
         <>
          <Form.Group>
        <Form.Control type='text' onChange={handleSearch} placeholder='Search Food'/>
        <Button onClick={getSearchedFood}>Ara</Button>
      </Form.Group>
     {
     food.map((item,index) => (
       <div key={index}>
        <h1>{item.recipe.label}</h1>
         Calori : <h1>{item.recipe.calories}</h1>
         <img src={item.recipe.image} />
         <h1>{item.recipe.mealType}</h1>
       </div>
     ))
     }
         </>
        )
      }
    </div>
  );
}

export default App;
