import item from "./DialogsItem.module.css";

const DialogsItem = (props) => {
  return <div className={item.dialogs__item}>{props.name}</div>;
};

export default DialogsItem