let initialState = {
  postsData: [
    { id: 1, text: "YEEES", likes: 21 },
    { id: 2, text: "GG", likes: 21 },
    { id: 3, text: "Hahahahaha", likes: 21 },
    { id: 4, text: "Alexandeeer", likes: 21 },
  ],

  newPostText: "",

  profile: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD-POST":
      return {
        ...state,
        newPostText: "",
        postsData: [
          { id: 5, text: state.newPostText, likes: 0 },
          ...state.postsData,
        ],
      };
    case "UPDATE-NEW-POST-TEXT":
      return {
        ...state,
        newPostText: action.text,
      };
    case "GET-PROFILE":
      return {
        ...state,
        profile: action.profile,
      }
    default:
      return state;
  }
};

export default profileReducer;

export const getProfile = (profile) => ({ type: "GET-PROFILE", profile});
