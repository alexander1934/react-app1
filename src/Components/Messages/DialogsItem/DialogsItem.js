import item from "./DialogsItem.module.css";
import { NavLink } from "react-router-dom";

const DialogsItem = (props) => {
  let path = "/messages/" + props.id;
  return (
    <div className={item.dialogs__item}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

export default DialogsItem;
