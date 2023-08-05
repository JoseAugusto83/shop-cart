import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Products from './Components/Products/Products';
import Provider from './context/Provider';
import Cart from './Components/Cart/Cart';

function App() {
  return (
    <div>
      <Provider>
        <Header/>
        <Products/>
        <Cart/>
      </Provider>
    </div>
  );
}

export default App;
