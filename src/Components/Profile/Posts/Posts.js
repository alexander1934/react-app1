import Post from "./Post/Post";
import posts from "./Posts.module.css";

const Posts = (props) => {

  let postElements = props.posts.map(el => <Post text={el.text} likes={el.likes}/>)

  return <div className={posts.block}>
    <h3>My posts</h3>
    <input type="text" placeholder="Add post"/>
      {postElements};
  </div>;
};

export default Posts;
