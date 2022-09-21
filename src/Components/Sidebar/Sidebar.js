import sidebar from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <ul className={sidebar.list}>
      <li className={sidebar.item}><a href="/profile">My profile</a></li>
      <li className={sidebar.item}><a href="/messages">Messages</a></li>
      <li className={sidebar.item}><a href="/news">News</a></li>
      <li className={sidebar.item}><a href="/music">Music</a></li>
      <li className={sidebar.item}><a href="/settings">Settings</a></li>
    </ul>
  );
};

export default Sidebar;