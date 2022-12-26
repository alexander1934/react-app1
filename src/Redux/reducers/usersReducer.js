let initialState = {
  usersData: [
    { id: 1, name: "Alexander Kovalenko", isFriends: true, status: "I am Boss here", location: {city: "Rostov-on-Don", country: "Russia"}},
    { id: 2, name: "Ivan Vasilev", isFriends: true, status: "I love vkusno i tochka", location: {city: "Rostov-on-Don", country: "Russia"}},
    { id: 3, name: "Artem Sysoev", isFriends: false, status: "Bonjour", location: {city: "Paris", country: "French"}},
  ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FOLLOW":
      return {
        ...state,
        usersData: state.usersData.map((u) => {
          if (u.id === action.id) {
            return { ...u, isFriends: true };
          }
          return u;
        }),
      };
    case "UNFOLLOW":
      return {
        ...state,
        usersData: state.usersData.map((u) => {
          if (u.id === action.id) {
            return { ...u, isFriends: false };
          }
          return u;
        }),
      };
    default:
      return state;
  }
};

export default usersReducer;
