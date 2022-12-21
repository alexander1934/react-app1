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
  let stateCopy = {...state};
  stateCopy.postsData = [...state.postsData]
  switch (action.type) {
    case "ADD-POST":
      let newPost = {
        id: 5,
        text: stateCopy.newPostText,
        likes: 0,
      };
      stateCopy.postsData.push(newPost);
      stateCopy.newPostText = "";
      return stateCopy;

    case "UPDATE-NEW-POST-TEXT":
      stateCopy.newPostText = action.text;
      return stateCopy;
    default:
      return stateCopy;
  }
};

export default profileReducer;
