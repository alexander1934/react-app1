import message from "./Message.module.css";

const Message = (props) => {
  return <div className={message.message}>{props.value}</div>;
};

export default Message;
