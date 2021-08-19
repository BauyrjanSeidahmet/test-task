import React from 'react';
import { useState } from 'react';
import SearchIcon from '../../assets/images/search.svg'
import './SearchBar.css'
import { NavLink } from 'react-router-dom';

const SearchBar = () => {
  const [input, setInput] = useState('')

  const onChange = (e) => {
    const { value } = e.target;
    setInput(value);
  }

  return (
      <div>
        <input value={input} onChange={onChange}/>
        <NavLink to={`/products?search=${input}`}>
          <img alt='search icon' src={SearchIcon}/>
        </NavLink>
      </div>
  );
};

export default SearchBar;