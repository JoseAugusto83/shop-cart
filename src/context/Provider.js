import React from 'react';
import AppContext from './AppContext';
import propTypes from 'prop-types';

const Provider = ({children}) => {

  const [query , setQuery] = React.useState('iphone');
  const [cart, setCart] = React.useState([]);
  const [cartVisible, setCartVisible] = React.useState(false);

  const value = {
    query,
    setQuery,
    cart,
    setCart,
    cartVisible,
    setCartVisible,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export default Provider;


Provider.propTypes = {
  children: propTypes.any,
}.isRequired;