import { createContext, useState } from 'react';

import Home from './pages/Home';

import './App.css'


export const FoodContext = createContext("");

function App() {
  const [foodsToCart, setFoodsToCart] = useState([])

  console.log("foodsToCart", foodsToCart);

  return (
    <FoodContext.Provider value={{foodsToCart, setFoodsToCart}}>
      <div className='AppContainer'>
        <Home />
      </div>
    </FoodContext.Provider>
  );
}

export default App;
