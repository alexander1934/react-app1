import User from "./User";

const Users = (props) => {
  let userElements = props.usersPage.usersData.map((user) => <User name = {props.usersPage.name} location = {props.usersPage.location} status={props.status} />);
  return <div>{userElements}</div>;
};

export default Users;
