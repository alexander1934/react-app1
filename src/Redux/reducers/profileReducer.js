let initialState = {
  postsData: [
    { id: 1, text: "YEEES", likes: 21 },
    { id: 2, text: "GG", likes: 21 },
    { id: 3, text: "Hahahahaha", likes: 21 },
    { id: 4, text: "Alexandeeer", likes: 21 },
  ],

  newPostText: "",
};

const profileReducer = (state = initialState, action) => {
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
