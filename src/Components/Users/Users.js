import React from "react";
import style from "./Users.module.css";
import { NavLink } from 'react-router-dom';

const Users = (props) => {

  let pagesCount = Math.ceil(
    props.usersPage.totalCount / props.usersPage.pageSize
  );

  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    if (pages.length < 10) {
      pages.push(i);
  }
  }

  return (
    <div className={style.main}>
      <div className={style.usersBlock}>
        {props.usersPage.usersData.map((user) => (
          <div key={user.id} className={style.user}>
            <div>
              <NavLink to={`/profile/${user.id}`}><img
                src={
                  user.photos.small === null
                    ? "https://otvet.imgsmail.ru/download/689367f58323fc96e83911b5bc5f5902_i-15.jpg"
                    : user.photos.small
                }
                alt="avatar"
                className={style.image}
              /></NavLink>
            </div>
            <div className={style.userInfo}>
              <NavLink to={`/profile/${user.id}`}><div className={style.username}>{user.name}</div></NavLink>
              <div className={style.location}></div>
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
        ))}
      </div>
      <div className={style.switches}>
        {pages.map((el) => {
          return (
            <span
              className={
                el === props.usersPage.currentPage ? style.selected : ""
              }
              onClick={() => {
                props.onPageChange(el)
              }}
            >
              {el}
            </span>
          );
        })}
      </div>
    </div>
  );
}
export default Users;
