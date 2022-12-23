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
      return {
        ...state,
        newPostText: "",
        postsData: [
          ...state.postsData,
          { id: 5, text: state.newPostText, likes: 0 },
        ],
      };
    case "UPDATE-NEW-POST-TEXT":
      return {
        ...state,
        newPostText: action.text,
      };
    default:
      return state;
  }
};

export default profileReducer;
