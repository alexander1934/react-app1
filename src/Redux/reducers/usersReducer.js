let initialState = {
  usersData: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FOLLOW":
      return {
        ...state,
        usersData: state.usersData.map((u) => {
          if (u.id === action.id) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case "UNFOLLOW":
      return {
        ...state,
        usersData: state.usersData.map((u) => {
          if (u.id === action.id) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case "SET-USERS": 
    return {
      ...state, 
      usersData:[
      ...action.users
      ], 
     }
    default:
      return state;
  }
};

export default usersReducer;
