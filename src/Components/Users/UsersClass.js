import React from "react";
import style from "./User.module.css";
import Axios from "axios";

class Users extends React.Component {

  constructor(props){
    super(props);
    Axios.get("https://social-network.samuraijs.com/api/1.0/users").then(
        (responce) => {
          this.props.setUsers(responce.data.items);
        }
      );
  }

  setUsers = () => {
    if (this.props.usersPage.usersData.length === 0) {
      Axios.get("https://social-network.samuraijs.com/api/1.0/users").then(
        (responce) => {
          this.props.setUsers(responce.data.items);
        }
      );
    }
  }

  render = () => {
    return <div className={style.main}>
      {/* <button onClick={this.setUsers}>Set Users</button> */}
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
    </div>;
  }
}

export default Users;
