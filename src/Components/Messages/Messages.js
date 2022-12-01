import messages from "./Messages.module.css";
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import React from "react";

const Messages = (props) => {
  let inputElement = React.createRef();

  let addMessage = () => {
    props.dispatch({ type: "ADD-MESSAGE" });
  };

  let onMessageChange = () => {
    let text = inputElement.current.value;
    props.dispatch({type: "UPDATE-NEW-MESSAGE-TEXT", text: text})
  }

  let dialogElements = props.dialogs.map((user) => (
    <DialogsItem name={user.name} id={user.id} />
  ));

  let messagesElements = props.messages.map((message) => (
    <Message value={message.value} />
  ));

  return (
    <div className={messages.wrapper}>
      <div className={messages.dialogs}>{dialogElements}</div>
      <div className={messages.dialog}>
        {messagesElements}
        <div className={messages.input}>
          <input
            onChange={onMessageChange}
            ref={inputElement}
            value={props.newMessageText}
            type="text"
            placeholder="Write a message"
          />
          <button onClick={addMessage}>+</button>
        </div>
      </div>
    </div>
  );
};

export default Messages;
