import React from 'react';
import s from './Post.module.css';


const Post = (props) => {

  return (
    <div className={s.item}>
      <img src='https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8' alt='no img'></img>
      {props.message}
      <div className={s.like}><button><span>Like {props.likesCount}</span></button></div>
    </div>
  )
}

export default Post;