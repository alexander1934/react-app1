import { connect } from "react-redux";
import Messages from "./Messages";

let mapStateToProps = (state) => {
  return {
    messagesPage: state.messagesPage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => {
      dispatch({ type: "ADD-MESSAGE" });
    },
    onMessageChange: (text) => {
      dispatch({ type: "UPDATE-NEW-MESSAGE-TEXT", text: text });
    },
  };
};

let MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;
