import { NavLink } from "react-router-dom";
import sidebar from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <ul className={sidebar.list}>
      <li className={sidebar.item}>
        <NavLink to={"/profile"}>My profile</NavLink>
      </li>
      <li className={sidebar.item}>
        <NavLink to={"/messages"}>Messages</NavLink>
      </li>
      <li className={sidebar.item}>
        <NavLink to={"/news"}>News</NavLink>
      </li>
      <li className={sidebar.item}>
        <NavLink to={"/music"}>Music</NavLink>
      </li>
      <li className={sidebar.item}>
        <NavLink to={"/settings"}>Settings</NavLink>
      </li>
    </ul>
  );
};

export default Sidebar;
