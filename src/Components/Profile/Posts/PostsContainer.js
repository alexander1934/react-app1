import Posts from "./Posts";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch({ type: "ADD-POST" });
    },

    onPostChange: (text) => {
      dispatch({ type: "UPDATE-NEW-POST-TEXT", text: text });
    },
  };
};

let PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;
