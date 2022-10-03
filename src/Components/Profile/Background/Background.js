import style from "./Background.module.css";

const Background = (props) => {
  return <img src={props.src} className={style.background} alt="profile-img"/>;
};

export default Background;
