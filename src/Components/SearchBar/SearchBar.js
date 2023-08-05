import React, { useContext } from 'react';
import './SearchBar.css';
import { BsSearch } from 'react-icons/bs';
import AppContext from '../../context/AppContext';

const SearchBar = () => {

  const [search, setSearch] = React.useState(undefined);

  const contexto = useContext(AppContext);

  function handleSubmit(event){
    event.preventDefault();
    contexto.setQuery(search);
    setSearch('');
    
  }

  return (

    <form className='search-bar' onSubmit={handleSubmit}>
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