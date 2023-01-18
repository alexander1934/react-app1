import { connect } from "react-redux";
import Users from "./UsersClass";

const mapStateToProps = (state) => {
  return {
    usersPage: state.usersPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (id) => {
      dispatch({ type: "FOLLOW", id: id });
    },

    unfollow: (id) => {
      dispatch({ type: "UNFOLLOW", id: id });
    },
    
    setUsers: (users) => {
      dispatch({ type: "SET-USERS", users: users})
    },

    setPage: (page) => {
      dispatch({ type: "SET-PAGE", page: page})
    }
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
