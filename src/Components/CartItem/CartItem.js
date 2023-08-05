import React, { useContext } from 'react';
import './CartItem.css';
import { BsCartDashFill } from 'react-icons/bs';
import formatCurrency from '../../utils/formatCurrency';
import AppContext from '../../context/AppContext';

const CartItem = ({data, index}) => {

  const contexto = useContext(AppContext);

  function handleClick(){
    let cart = contexto.cart.map(item => item);
    cart.splice(index, 1);
    contexto.setCart(cart);
  }

  return (
    <section className='cart-item'>
      <img alt='imagem do produto' src={data.thumbnail} className='cart-item-image'/>

      <div className='cart-item-content'>
        <h3 className='cart-item-title'>{data.title}</h3>
        <h3>{formatCurrency(data.price)}</h3>

        <button type='button' onClick={handleClick} className='button__remove-item'>
          <BsCartDashFill/>
        </button>
      </div>
    </section>
  );
};

export default CartItem;