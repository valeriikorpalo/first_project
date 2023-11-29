import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'


const MyPosts = (props) => {
  return <div>
    <div>
      My Posts
    </div>
    <div>
      <textarea></textarea>
      <button>Add Post</button>
      <button>Remove Text</button>
    </div>
    <div className={s.posts}>
      <Post message='Hi, How are U?' likesCount='5'/>
      <Post message='I fine Tnx?' likesCount='54' />
    </div>

  </div>
}

export default MyPosts;