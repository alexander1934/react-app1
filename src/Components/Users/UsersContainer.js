import { connect } from "react-redux";
import React from "react";
import Axios from "axios";
import Users from "./Users";

class UsersAPI extends React.Component {
  componentDidMount() {
    Axios.get(
      `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersPage.pageSize}&page=${this.props.usersPage.currentPage}`
    ).then((responce) => {
      this.props.setUsers(responce.data.items);
      this.props.setTotalCount(responce.data.totalCount);
    });
  }

  onPageChange = (page) => {
    this.props.setPage(page);
    Axios.get(
      `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersPage.pageSize}&page=${page}`
    ).then((responce) => {
      this.props.setUsers(responce.data.items);
    });
  };

  render = () => {
    return (
      <Users
        usersPage={this.props.usersPage}
        onPageChange={this.onPageChange}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
      />
    );
  };
}

const mapStateToProps = (state) => {
  return {
    usersPage: state.usersPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (id) => {
      dispatch({ type: "FOLLOW", id });
    },

    unfollow: (id) => {
      dispatch({ type: "UNFOLLOW", id });
    },

    setUsers: (users) => {
      dispatch({ type: "SET-USERS", users });
    },

    setPage: (page) => {
      dispatch({ type: "SET-PAGE", page });
    },

    setTotalCount: (count) => {
      dispatch({ type: "SET-TOTALCOUNT", count });
    },
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPI);

export default UsersContainer;
