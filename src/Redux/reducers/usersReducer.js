let initialState = {
  usersData: [],
  pageSize: 5,
  totalCount: 32,
  currentPage: 1,
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
        usersData: action.users,
      };
    case "SET-PAGE":
      return {
        ...state,
        currentPage: action.page,
      };
    default:
      return state;
  }
};

export default usersReducer;
