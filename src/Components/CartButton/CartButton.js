import React, { useContext } from 'react';
import { AiOutlineShoppingCart} from 'react-icons/ai';
import './CartButton.css';
import AppContext from '../../context/AppContext';



const CartButton = () => {

  const contexto = useContext(AppContext);

  function handleClick(){
    contexto.setCartVisible((anterior) => !anterior);
  }



  return (
    <button className='cart__button' onClick={handleClick}>
      <AiOutlineShoppingCart/>
      <span className='cart-status'>{contexto.cart.length}</span>
    </button>
  );
};

export default CartButton;