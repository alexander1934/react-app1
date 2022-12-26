import React from "react";
import User from "./User";
import style from "./User.module.css";

const Users = (props) => {

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
          src="https://cdn.britannica.com/95/121095-050-760E35A0/Alexander-the-Great-detail-painting-Porus-Charles.jpg"
          alt="avatar"
          className={style.image}
        />
      </div>
      <div className={style.userInfo}>
        <div className={style.username}>{user.name}</div>
        <div className={style.location}>{user.location.country}, {user.location.city}</div>
        <div className={style.status}>{user.status}</div>
      </div>
      <div className={style.followStatus}>
        {user.isFriends ? (
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
  return <div>{userElements}</div>;
};

export default Users;
