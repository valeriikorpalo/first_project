import React from 'react';
import s from './Profile.module.css';
import MyPosts from './My Posts/MyPosts'



const Profile = (props) => {
  return (
    <div className={s.content}>
      <div>
        <img className={s.img} src='https://img.freepik.com/free-photo/a-painting-of-a-mountain-lake-with-a-mountain-in-the-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1699660800&semt=ais' />
      </div>
      <div className={s.ava}>
        avatar + Description
      </div>
      <MyPosts />
    </div>
  )
}

export default Profile;