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
  let stateCopy = {...state}
  stateCopy.messagesData = [...state.messagesData]
  stateCopy.userData = [...state.userData]
  switch (action.type) {
    case "ADD-MESSAGE":
      let newMessage = {
        id: 3,
        value: stateCopy.newMessageText,
      };
      stateCopy.messagesData.push(newMessage);
      stateCopy.newMessageText = "";
      return stateCopy;

    case "UPDATE-NEW-MESSAGE-TEXT":
      stateCopy.newMessageText = action.text;
      return stateCopy;
    default:
      return stateCopy;
  }
};

export default messagesReducer;
