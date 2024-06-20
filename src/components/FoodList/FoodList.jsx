import FoodCard from '../FoodCard/FoodCard';

import './FoodList.css'

const FoodList = () => {
  const foods = [
    {
      name: 'Sushi',
      desciption: 'Finest fish and veggies',
      price: 22.99,
      amount: 0,
    },
    {
      name: 'Schnitzel',
      desciption: 'A german specialty!',
      price: 16.5,
      amount: 0,
    },
    {
      name: 'Barbecue Burger',
      desciption: 'American, raw, meaty',
      price: 12.99,
      amount: 0,
    },
    {
      name: 'Green Bowl',
      desciption: 'Healthy...and green...',
      price: 18.99,
      amount: 0,
    },
  ];
  return (
    <div className='food-list-container'>
      {foods.map((food, index) => (
        <FoodCard
          key={index}
          name={food.name}
          price={food.price}
          amount={food.amount}
          description={food.desciption}
        />
      ))}
    </div>
  );
};

export default FoodList;