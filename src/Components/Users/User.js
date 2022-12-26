import style from "./User.module.css";

const User = (props) => {
  return (
    <div className={style.user}>
      <div>
        <img
          src="https://cdn.britannica.com/95/121095-050-760E35A0/Alexander-the-Great-detail-painting-Porus-Charles.jpg"
          alt="avatar"
          className={style.image}
        />
      </div>
      <div className={style.userInfo}>
        <div className={style.username}>{props.name}</div>
        {/* <div className={style.location}>{props.location.country}, {props.location.city}</div> */}
        <div className={style.status}>{props.status}</div>
      </div>
      <div className={style.followStatus}>
        {props.isFriends ? <button onClick={props.unfollow}>Unfollow</button> : <button onClick={props.follow()}>Follow</button>}
      </div>
    </div>
  );
};

export default User;
