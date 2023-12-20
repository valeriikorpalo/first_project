import React from 'react';
import s from './Profile.module.css';
import MyPosts from './My Posts/MyPosts'
import ProfileInfo from './My Posts/ProfileInfo/ProfileInfo'


const Profile = (props) => {
 
  return (
    <div className={s.content}>
      <ProfileInfo />
      <MyPosts state={props.state.posts} addPost={props.addPost} />
    </div>
  )
}

export default Profile;