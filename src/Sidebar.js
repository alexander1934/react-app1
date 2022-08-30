import sidebar from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={sidebar.list}>
      <div>My profile</div>
      <div>News</div>
      <div>Music</div>
      <div>Games</div>
      <div>Settings</div>
    </div>
  );
};

export default Sidebar;