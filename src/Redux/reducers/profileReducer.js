const profileReducer = (action, state) => {
  switch (action.type) {
    case "ADD-POST":
      let newPost = {
        id: 5,
        text: state.newPostText,
        likes: 0,
      };
      state.postsData.push(newPost);
      state.newPostText = "";
      return state;

    case "UPDATE-NEW-POST-TEXT":
      state.newPostText = action.text;
      return state;
    default:
      return state;
  }
};

export default profileReducer;
