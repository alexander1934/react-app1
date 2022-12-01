const messagesReducer = (action, state) => {
  switch (action.type) {
    case "ADD-MESSAGE":
      let newMessage = {
        id: 3,
        value: state.newMessageText,
      };
      state.messagesData.push(newMessage);
      state.newMessageText = "";
      return state;

    case "UPDATE-NEW-MESSAGE-TEXT":
      state.newMessageText = action.text;
      return state;
    default:
      return state;
  }
};

export default messagesReducer;
