import React from 'react';
import './Header.css';
import SearchBar from '../SearchBar/SearchBar';
import CartButton from '../CartButton/CartButton';

const Header = () => {
  return (
    <>
      <div className='header'>
        <div className='container'>
          <SearchBar/>
          <CartButton/>
        </div>
      </div>
    </>
  );
};

export default Header;