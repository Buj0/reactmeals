import { useState, useContext } from 'react';
import { FoodContext } from '../../App';

import './FoodCard.css'

const FoodCard = ({ name, description, price, amount }) => {
  const [foodItemAmount, setFoodItemAmount] = useState(1);

  const { foodsToCart, setFoodsToCart } = useContext(FoodContext);

  const addFoodToCart = ()=> {
    const food = {
        name,
        description,
        price,
        amount: foodItemAmount
    }

    setFoodsToCart([...foodsToCart, food])
  } 

  return (
    <div className='food-card'>
      <div>
        <p>{name}</p>
        <p>{description}</p>
        <p className='price'>${price}</p>
      </div>
      <div>
        <p>Amount</p>
        <input type='number' value={foodItemAmount} onChange={(e)=> setFoodItemAmount(e.target.value) } />
        <button onClick={addFoodToCart}>+Add</button>
      </div>
    </div>
  );
};

export default FoodCard;
