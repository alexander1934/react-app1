import logo from "../../logo.svg";
import header from "./Header.module.css";

const Header = () => {
  return (
    <div className={header.block}>
      <div className={header.wrap}>
        <div className={header.logo}>
          <img src={logo} alt="logo"></img>
          <div className={header.brand}>SocialWeb</div>
        </div>
        <div className={header.content}></div>
      </div>
    </div>
  );
};

export default Header;
