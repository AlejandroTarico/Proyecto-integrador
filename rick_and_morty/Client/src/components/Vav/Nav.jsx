import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import style from './Nav.module.css';
import { Link, NavLink } from 'react-router-dom';

const Nav = (props) => {
  return (
    <>
      <div className={style.contenedorSearch}>
          {/* <Link to='/about' className={style.textNav} >About</Link>
          <Link to='/home' className={style.textNav} >Home</Link>  */}
          <nav>
            <NavLink to='/about' className={({ isActive }) => isActive ? style.active : ''}>About</NavLink>
            <NavLink to='/home' className={({ isActive }) => isActive ? style.active : ''}>Home</NavLink>     
            <NavLink to='/favorites' className={({ isActive }) => isActive ? style.active : ''}>Favorites</NavLink>     
          </nav>
          <SearchBar onSearch={props.onSearch} />
          <div className={style.logContainer}>
            <Link to='/' className={style.logOut} >LogOut</Link>     
          </div> 
      </div>

    </>
  )
}

export default Nav