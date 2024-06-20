import { useContext, useEffect, useState } from 'react';

import Modal from 'react-modal';
import { FoodContext } from '../../App';
import AddToCartIcon from '../../assets/icons/add-to-cart.png';

import './Header.css';

Modal.setAppElement('#root');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const Header = () => {
  const [totalAmountPrice, setTotalAmountPrice] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const { foodsToCart, setFoodsToCart } = useContext(FoodContext);
  const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    let totalAmount = 0;
    let totalAmountPrice = 0;

    foodsToCart.forEach((item) => (totalAmount += parseInt(item.amount, 10)));

    foodsToCart.forEach(
      (item) => (totalAmountPrice += parseInt(item.amount, 10) * item.price)
    );

    setTotalAmount(totalAmount);
    setTotalAmountPrice(totalAmountPrice);
  }, [foodsToCart]);

  function closeModal() {
    setIsOpen(false);
  }

  const handleIncreaseAmount = (selectedItemIndex) => {
    const updatedFoodsToCart = foodsToCart?.map((item, index) => {
      if (selectedItemIndex === index) {
        item.amount += 1;
      }

      return item;
    });

    setFoodsToCart(updatedFoodsToCart);
  };

  return (
    <div className='header'>
      <p className='logo'>ReactMeals</p>
      <div className='add-to-cart' onClick={() => setIsOpen(true)}>
        <img src={AddToCartIcon} alt='add-to-cart' width={30} height={30} />
        <p>Your Cart</p>
        <p>{totalAmount}</p>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel='Example Modal'
      >
        {foodsToCart.map((item, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
              width: '300px',
              borderBottom: '1px solid brown',
            }}
          >
            <div>
              <p>{item.name}</p>
              <p>${item.price}</p>
            </div>
            <div>
              <p>x{item.amount}</p>
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button>-</button>
              <button onClick={() => handleIncreaseAmount(index)}>+</button>
            </div>
          </div>
        ))}

        <p>Total Amount Price</p>
        <p>${totalAmountPrice.toFixed(2)}</p>

        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
};

export default Header;
