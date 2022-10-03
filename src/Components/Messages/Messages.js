import messages from "./Messages.module.css";
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";

const Messages = (props) => {
  let userData = [
    { id: 1, name: "Владислав Топчиев" },
    { id: 2, name: "Максим Муранов" },
    { id: 3, name: "Даниил Матяш" },
    { id: 4, name: "Никита Быков" },
    { id: 5, name: "Иван Кириченко" },
    { id: 6, name: "Никита Гузий" },
    { id: 7, name: "Иван Романченко" },
  ];

  let dialogElements = userData.map((user) => (
    <DialogsItem name={user.name} id={user.id} />
  ));

  let messagesData = [{ value: "Привет" }, { value: "Как дела" }];

  let messagesElements = messagesData.map((message) => (
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
