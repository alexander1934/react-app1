let initialState = {
  usersData: [],
  pageSize: 100,
  totalCount: 32,
  currentPage: 1,
  isFetching: false,
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
    case "SET-TOTALCOUNT":
      return {
        ...state,
        totalCount: action.count,
      };
    case "FETCHING-TOGGLE":
      return {
        ...state,
        isFetching: action.status,
      };
    default:
      return state;
  }
};

export default usersReducer;

export const follow = (id) => ({ type: "FOLLOW", id})
export const unfollow = (id) => ({ type: "UNFOLLOW", id})
export const setUsers = (users) => ({ type: "SET-USERS", users})
export const setPage = (page) => ({ type: "SET-PAGE", page})
export const setTotalCount = (count) => ({ type: "SET-TOTALCOUNT", count})
export const fetchingToggle = (status) => ({ type: "FETCHING-TOGGLE", status})