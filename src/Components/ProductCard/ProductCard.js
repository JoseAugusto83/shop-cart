import React from 'react';
import './ProductCard.css';
import { BsFillCartPlusFill } from 'react-icons/bs';
import formatCurrency from '../../utils/formatCurrency';

const ProductCard = ({data}) => {
  return (
    <section className='product-card'>
      <img src={data.thumbnail.replace(/\w\.jpg/gi, 'W.jpg')} alt='product' className='card__image'/>

      <div className='card__infos'>
        <h2 className='card__price'>{formatCurrency(data.price)}</h2>
        <h2 className='card__title'>{data.title}</h2>
      </div>

      <button className='button__add-cart' type='button'><BsFillCartPlusFill/></button>
    </section>
  );
};

export default ProductCard;