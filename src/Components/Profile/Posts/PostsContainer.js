import React from "react";
import Posts from "./Posts";

const PostsContainer = (props) => {

  let state = props.store.getState();

  let addPost = () => {
    props.store.dispatch({ type: "ADD-POST" });
  };

  let onPostChange = (text) => {
    props.store.dispatch({ type: "UPDATE-NEW-POST-TEXT", text: text });
  };

  return (
    <Posts
      addPost={addPost}
      onPostChange={onPostChange}
      newPostText={state.profilePage.newPostText}
      postsData={state.profilePage.postsData}
    />
  );
};

export default PostsContainer;
