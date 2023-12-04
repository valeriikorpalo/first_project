import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'



const MyPosts = (props) => {


  
  let postsElements = props.posts.map(p => <Post id={p.id} message={p.message} likeCount={p.likesCount} />)

  return (
    <div className={s.postsBlock}>
      <div className={s.postsMain}>
        <h3>My Posts</h3>
      </div>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div className={s.button}>
          <span className={s.buttonItem}><button>Add Post</button></span>
          <span className={s.buttonItem}><button>Remove Text</button></span>
        </div>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts;