import React from 'react';
import s from './Nav.module.css';
import { NavLink } from 'react-router-dom';


const FriendsList = (props) => {

  return (
    <div className={s.friends}>
      <h4 className={s.friendsItem}>Friends List</h4>
    </div>
  )
}


const UsersSlidBar = (props) => {
  return (
    <div className={s.userItem}>
      <img className={s.userPhotosItem}
        src={props.img} alt="img" />
      <div className={s.userNameItem}>{props.name}</div>
    </div>
  )
}

const Nav = (props) => {

  let usersElement = props.state.sidebar.map(user => <UsersSlidBar id={user.id} name={user.name} img={user.img} />)

  return (
    <div className={s.navContainer}>
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
      <FriendsList />
      <div className={s.usersContainer}>
        <div className={s.userItems}>
          {usersElement}
        </div>
      </div>
    </div>
  )
}

export default Nav;