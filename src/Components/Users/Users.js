import React from "react";
// import User from "./User";
import style from "./User.module.css";
import Axios from "axios";

const Users = (props) => {

  let setUsers = () =>{
    if (props.usersPage.usersData.length === 0) {
      Axios.get("https://social-network.samuraijs.com/api/1.0/users").then(
        (responce) => {
          props.setUsers(responce.data.items);
        }
      );
    }
  }
  
  let userElements = props.usersPage.usersData.map((user) => (
    // <User
    //   id={user.id}
    //   name={user.name}
    //   location={user.location}
    //   status={user.status}
    //   isFriends={user.isFriends}
    // />
    <div key={user.id} className={style.user}>
      <div>
        <img
          src={user.photos.small === null ? "https://otvet.imgsmail.ru/download/689367f58323fc96e83911b5bc5f5902_i-15.jpg" : user.photos.small}
          alt="avatar"
          className={style.image}
        />
      </div>
      <div className={style.userInfo}>
        <div className={style.username}>{user.name}</div>
        <div className={style.location}>
          {/* {user.location.country}, {user.location.city} */}
        </div>
        <div className={style.status}>{user.status}</div>
      </div>
      <div className={style.followStatus}>
        {user.followed ? (
          <button
            onClick={() => {
              props.unfollow(user.id);
            }}
          >
            Unfollow
          </button>
        ) : (
          <button
            onClick={() => {
              props.follow(user.id);
            }}
          >
            Follow
          </button>
        )}
      </div>
    </div>
  ));
  return <div className={style.main}>
    <button onClick={setUsers}>Set Users</button>
    {userElements}</div>;
};

export default Users;
