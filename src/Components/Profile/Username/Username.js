import username from "./Username.module.css";

const UserName = (props) => {
  return (
    <div className={username.block}>
      <span>
        {props.firstName} {props.lastName}
      </span>
      <br></br>
      <span className={username.id}>{props.id}</span>
    </div>
  );
};

export default UserName;
