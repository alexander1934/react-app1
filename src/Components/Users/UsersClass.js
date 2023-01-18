import React from "react";
import style from "./User.module.css";
import Axios from "axios";

class Users extends React.Component {
  componentDidMount() {
    Axios.get(
      `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersPage.pageSize}&page=${this.props.usersPage.currentPage}`
    ).then((responce) => {
      this.props.setUsers(responce.data.items);
    });
  }

  onPageChange = (page) => {
    this.props.setPage(page);
    Axios.get(
      `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersPage.pageSize}&page=${page}`
    ).then((responce) => {
      this.props.setUsers(responce.data.items);
    });
  }

  render = () => {
    let pagesCount = Math.ceil(
      this.props.usersPage.totalCount / this.props.usersPage.pageSize
    );

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    return (
      <div className={style.main}>
        <div className={style.usersBlock}>
          {this.props.usersPage.usersData.map((user) => (
            <div key={user.id} className={style.user}>
              <div>
                <img
                  src={
                    user.photos.small === null
                      ? "https://otvet.imgsmail.ru/download/689367f58323fc96e83911b5bc5f5902_i-15.jpg"
                      : user.photos.small
                  }
                  alt="avatar"
                  className={style.image}
                />
              </div>
              <div className={style.userInfo}>
                <div className={style.username}>{user.name}</div>
                <div className={style.location}></div>
                <div className={style.status}>{user.status}</div>
              </div>
              <div className={style.followStatus}>
                {user.followed ? (
                  <button
                    onClick={() => {
                      this.props.unfollow(user.id);
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      this.props.follow(user.id);
                    }}
                  >
                    Follow
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className={style.switches}>
          {pages.map((el) => {
            return (
              <span
                className={
                  el === this.props.usersPage.currentPage ? style.selected : ""
                }
                onClick={() => {
                  this.onPageChange(el)
                }}
              >
                {el}
              </span>
            );
          })}
        </div>
      </div>
    );
  };
}

export default Users;
