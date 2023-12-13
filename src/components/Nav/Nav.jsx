import React from 'react';
import s from './Nav.module.css';
import { NavLink } from 'react-router-dom';


const FriendsList = (props) => {

  return (
    <div className={s.friends}>
      <h3 className={s.friendsItem}>Friends List</h3>
    </div>
  )
}

const UserPhoto = (props) => {
  return (
    <img className={s.photoItem}
      src={props.img} alt="img" />
  )
}

const UserName = (props) => {
  return (
    <div>
    <div className={s.nameItem}>{props.name}</div>
    </div>
  )
}

const Nav = (props) => {

  let userPhotoElement = props.state.sidebar.map(photo => <UserPhoto img={photo.img} />)
  let userNameElement = props.state.sidebar.map(name => <UserName id={name.id} name={name.name} />)

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
      <div className={s.userContainer}>
        <div className={s.userItems}>
          {userPhotoElement}
        </div>
        <div className={s.userNames}>
          {userNameElement}
        </div>
      </div>

    </div>
  )
}

export default Nav;