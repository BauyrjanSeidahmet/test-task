import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SearchBar from '../../SearchBar/SearchBar';
import AccountIcon from '../../../assets/images/account.svg';
import './Header.css';

const Header = () => {
  const user = useSelector((state) => state.users.user);

  return (
    <div className='header'>
      <div>
        <NavLink to='/' color='inherit' className='headerLink'>
          Главная
        </NavLink>
        <NavLink to='/cart' color='inherit' className='headerLink'>
          Корзина
        </NavLink>
      </div>
      <div className='logoWrap'>
        <div>
          <h3>CONCEPT</h3>
        </div>
        <div>
          <SearchBar />
        </div>
        <div>
          {user ? (
            <>
              <div className='account'>
                <p>User</p>
                <img className='accountImg' alt='account icon' src={AccountIcon} />
              </div>
            </>
          ) : (
            <>
              <NavLink to='/login' component={Link} color='inherit'>
                Войти
              </NavLink>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
