let initialState = {
  userData: [
    { id: 1, name: "Владислав Топчиев" },
    { id: 2, name: "Максим Муранов" },
    { id: 3, name: "Даниил Матяш" },
    { id: 4, name: "Никита Быков" },
    { id: 5, name: "Иван Кириченко" },
    { id: 6, name: "Никита Гузий" },
    { id: 7, name: "Иван Романченко" },
    { id: 8, name: "Иван Романченко" },
  ],

  messagesData: [
    { id: 1, value: "Привет" },
    { id: 2, value: "Как дела" },
  ],

  newMessageText: "",
};

const messagesReducer = (state = initialState, action) => {
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
