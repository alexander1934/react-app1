import React from "react";
import Post from "./Post/Post";
import posts from "./Posts.module.css";

const Posts = (props) => {
  let inputElement = React.createRef();

  let addPost = () => {
    props.dispatch({ type: "ADD-POST" });
  };

  let onPostChange = () => {
    let text = inputElement.current.value;
    props.dispatch({ type: "UPDATE-NEW-POST-TEXT", text: text });
  };

  let postElements = props.posts.map((el) => (
    <Post text={el.text} likes={el.likes} />
  ));

  return (
    <div className={posts.block}>
      <h3>My posts</h3>
      <input
        onChange={onPostChange}
        ref={inputElement}
        type="text"
        placeholder="Add post"
        value={props.newPostText}
      />
      <button onClick={addPost}>add post</button>
      {postElements}
    </div>
  );
};

export default Posts;
