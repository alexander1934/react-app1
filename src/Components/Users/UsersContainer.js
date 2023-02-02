import { connect } from "react-redux";
import React from "react";
import Axios from "axios";
import Users from "./Users";
import Preloader from '../Common/Preloader/Preloader';
import { fetchingToggle, follow, setTotalCount, setUsers } from "../../Redux/reducers/usersReducer";
import { unfollow, setPage } from './../../Redux/reducers/usersReducer';

class UsersAPI extends React.Component {
  componentDidMount() {
    this.props.fetchingToggle(true);
    Axios.get(
      `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersPage.pageSize}&page=${this.props.usersPage.currentPage}`
    ).then((responce) => {
      this.props.fetchingToggle(false);
      this.props.setUsers(responce.data.items);
      this.props.setTotalCount(responce.data.totalCount);
    });
  }

  onPageChange = (page) => {
    this.props.setPage(page);
    this.props.fetchingToggle(true);
    Axios.get(
      `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersPage.pageSize}&page=${page}`
    ).then((responce) => {
      this.props.fetchingToggle(false);
      this.props.setUsers(responce.data.items);
    });
  };

  render = () => {
    return (
      <>
        {this.props.usersPage.isFetching ? (
          <Preloader width="80px" />
        ) : (
          <Users
            usersPage={this.props.usersPage}
            onPageChange={this.onPageChange}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
          />
        )}
      </>
    );
  };
}

const mapStateToProps = (state) => {
  return {
    usersPage: state.usersPage,
  };
};

const UsersContainer = connect(mapStateToProps, {follow, unfollow, setUsers, setPage, setTotalCount, fetchingToggle})(UsersAPI);

export default UsersContainer;
