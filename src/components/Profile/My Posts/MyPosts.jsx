import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'



const MyPosts = (props) => {

  const TextArea = () => {

    return (
      <textarea
        ref={newPostElement}
        className={s.textArea}>
      </textarea>
    )
  };

  let newPostElement = React.createRef();

  let newPost = () => {

    let text = newPostElement.current.value;
    props.addPost(text);
    newPostElement.current.value = '';

  }

  let postsElements = props.state.map(p => <Post id={p.id} message={p.message} likeCount={p.likesCount} />)

  return (
    <div className={s.postsBlock}>
      <div className={s.postsMain}>
        <h3>My Posts</h3>
      </div>
      <div>
        <div>
          <TextArea />
        </div>
        <div className={s.button}>
          <span className={s.buttonItem}><button onClick={newPost}>Add Post</button></span>
        </div>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts;