import React, { useContext } from 'react';
import './Products.css';
import fetchProducts from '../../api/fetchProducts';
import ProductCard from '../ProductCard/ProductCard';
import Loading from '../Loading/Loading';
import AppContext from '../../context/AppContext';

const Products = () => {

  const [products, setProducts] = React.useState(null);

  const contexto = useContext(AppContext);
  



  React.useEffect(() => {
    setProducts(null);
    fetchProducts(contexto.query)
      .then((response) => setProducts(response));
  }, [contexto.query]);



  return (
    (!products ? <Loading/> : 
      <section className='container products'>
        {products.map((product) => <ProductCard key={product.id} data={product}/>)}
      </section>
    )

  );
};

export default Products;