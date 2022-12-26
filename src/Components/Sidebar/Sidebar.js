import { NavLink } from "react-router-dom";
import sidebar from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <ul className={sidebar.list}>
      <li className={sidebar.item}>
        <NavLink to={"/profile"} className = { navData => navData.isActive ? sidebar.active : sidebar.item }>My profile</NavLink>
      </li>
      <li className={sidebar.item}>
        <NavLink to={"/messages"} className = { navData => navData.isActive ? sidebar.active : sidebar.item }>Messages</NavLink>
      </li>
      <li className={sidebar.item}>
        <NavLink to={"/news"} className = { navData => navData.isActive ? sidebar.active : sidebar.item }>News</NavLink>
      </li>
      <li className={sidebar.item}>
        <NavLink to={"/music"} className = { navData => navData.isActive ? sidebar.active : sidebar.item }>Music</NavLink>
      </li>
      <li className={sidebar.item}>
        <NavLink to={"/settings"} className = { navData => navData.isActive ? sidebar.active : sidebar.item }>Settings</NavLink>
      </li>
      <li className={sidebar.item}>
        <NavLink to={"/users"} className = { navData => navData.isActive ? sidebar.active : sidebar.item }>Users</NavLink>
      </li>
    </ul>
  );
};

export default Sidebar;
