import React from 'react';
import s from './Header.module.css';


const Header = (props) => {
   return <header className={s.header}>
     <img className={s.img} src='https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=626&ext=jpg&ga=GA1.1.1351234221.1693515771&semt=ais' />
   </header>
}

export default Header;