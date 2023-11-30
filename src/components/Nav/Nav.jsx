import React from 'react';
import s from './Nav.module.css';
import { NavLink } from 'react-router-dom';

const Nav = (props) => {

  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <div className={s.link}>
          <NavLink to='/profile'>Profile</NavLink>
        </div>
        <div className={s.link}>
          <NavLink to='/dialogs'>Dialogs</NavLink>
        </div>
        <div className={s.link}>
          <NavLink to='/news'>News</NavLink>
        </div>
        <div className={s.link}>
          <NavLink to='/music'>Music</NavLink>
        </div>
        <div className={s.link}>
          <NavLink to='/settings'>Settings</NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Nav;