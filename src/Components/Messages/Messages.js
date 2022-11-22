import messages from "./Messages.module.css";
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";

const Messages = (props) => {
  let dialogElements = props.dialogs.map((user) => (
    <DialogsItem name={user.name} id={user.id} />
  ));

  let messagesElements = props.messages.map((message) => (
    <Message value={message.value} />
  ));

  return (
    <div className={messages.wrapper}>
      <div className={messages.dialogs}>{dialogElements}</div>
      <div className={messages.dialog}>{messagesElements}</div>
    </div>
  );
};

export default Messages;
