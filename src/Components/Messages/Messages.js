import messages from "./Messages.module.css";
import DialogsItem from "./DialogsItem/DialogsItem";
import { NavLink } from "react-router-dom";

const Messages = (props) => {
  return (
    <div className={messages.wrapper}>
      <div className={messages.dialogs}>
        <NavLink to={"/messages/1"}>
          <DialogsItem name="Владислав Топчиев" />
        </NavLink>
        <NavLink to={"/messages/2"}>
          <DialogsItem name="Максим Муранов" />
        </NavLink>
        <NavLink to={"/messages/3"}>
          <DialogsItem name="Владимир Степанченко" />
        </NavLink>
      </div>
      <div className={messages.dialog}>ewew</div>
    </div>
  );
};

export default Messages;
