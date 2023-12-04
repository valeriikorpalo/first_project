import React from 'react';
import s from './Header.module.css';


const Header = (props) => {
  return (
    <header className={s.header}>
      <img className={s.img} src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Free_logo.svg/1200px-Free_logo.svg.png' alt='no img' />
    </header>
  )
}

export default Header;