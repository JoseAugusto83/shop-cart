import React from 'react';
import './SearchBar.css';
import {BsSearch} from 'react-icons/bs';

const SearchBar = () => {

  const [search, setSearch] = React.useState(null);

  return (

    <form className='search-bar'>
      <input 
        type='search'
        placeholder='Buscar Produtos' className='search__input' 
        required
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />

      <button type='submit' className='search__button'>
        <BsSearch/>

      </button>
    </form>

  );
};

export default SearchBar;