import React from 'react';
import './Products.css';
import fetchProducts from '../../api/fetchProducts';
import ProductCard from '../ProductCard/ProductCard';
import Loading from '../Loading/Loading';

const Products = () => {

  const [products, setProducts] = React.useState(null);

  

  React.useEffect(() =>{
    fetchProducts('computador')
      .then((response) => setProducts(response));
  }, []);



  return (
    (!products ? <Loading/> : 
      <section className='container products'>
        {products.map((product) => <ProductCard key={product.title} data={product}/>)}
      </section>
    )

  );
};

export default Products;