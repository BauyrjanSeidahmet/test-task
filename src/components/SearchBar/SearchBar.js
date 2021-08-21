import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import SearchIcon from '../../assets/images/search.svg';
import './SearchBar.css';

const SearchBar = () => {
  const [input, setInput] = useState('');

  const onChange = (e) => {
    const { value } = e.target;
    setInput(value);
  };

  return (
    <div className='seachBar'>
      <input className='inputSearch' placeholder='Найти вещь' value={input} onChange={onChange} />
      <NavLink to={`/products?search=${input}`}>
        <img alt='search icon' src={SearchIcon} />
      </NavLink>
    </div>
  );
};

export default SearchBar;
