import sidebar from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={sidebar.list}>
      <div className={sidebar.item}>My profile</div>
      <div className={sidebar.item}>News</div>
      <div className={sidebar.item}>Music</div>
      <div className={sidebar.item}>Games</div>
      <div className={sidebar.item}>Settings</div>
    </div>
  );
};

export default Sidebar;