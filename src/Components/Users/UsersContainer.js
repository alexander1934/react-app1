import { connect } from "react-redux";
import Users from "./Users";

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
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
