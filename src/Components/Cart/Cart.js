import React, { useContext } from 'react';
import './Cart.css';
import CartItem from '../CartItem/CartItem';
import AppContext from '../../context/AppContext';
import formatCurrency from '../../utils/formatCurrency';

const Cart = () => {

  const contexto = useContext(AppContext);

  let cartResume = null;

  contexto.cart.forEach((item) =>{
    cartResume += item.price;
  });

  return (
    <section className={contexto.cartVisible ? 'cart cart-visible' : 'cart' }>
      <div className='cart-items'>
        {contexto.cart && contexto.cart.map((item, index) => <CartItem key={index + item.id} data={item} index={index}/>)}
      </div>

      <div className='cart-resume'>{cartResume && formatCurrency(cartResume) || 'Sem itens no carrinho'}</div>
    </section>
  );
};

export default Cart;