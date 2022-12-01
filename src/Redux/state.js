import messagesReducer from "./reducers/messagesReducer";
import profileReducer from "./reducers/profileReducer";

let store = {
  _state: {
    profilePage: {
      postsData: [
        { id: 1, text: "YEEES", likes: 21 },
        { id: 2, text: "GG", likes: 21 },
        { id: 3, text: "Hahahahaha", likes: 21 },
        { id: 4, text: "Alexandeeer", likes: 21 },
      ],

      newPostText: "",
    },
    messagesPage: {
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
    },
  },

  getState() {
    return this._state;
  },

  _rerenderEntireTree() {
    console.log("state changed");
  },

  addPost() {
    let newPost = {
      id: 5,
      text: this._state.profilePage.newPostText,
      likes: 0,
    };
    this._state.profilePage.postsData.push(newPost);
    this._state.profilePage.newPostText = "";
    this._rerenderEntireTree(this._state);
  },

  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._rerenderEntireTree(this._state);
  },

  addMessage() {
    let newMessage = {
      id: 3,
      value: this._state.messagesPage.newMessageText,
    };
    this._state.messagesPage.messagesData.push(newMessage);
    this._state.messagesPage.newMessageText = "";
    this._rerenderEntireTree(this._state);
  },

  updateNewMessageText(newText) {
    this._state.messagesPage.newMessageText = newText;
    this._rerenderEntireTree(this._state);
  },

  reloader(observer) {
    this._rerenderEntireTree = observer;
  },

  dispatch(action) {
    profileReducer(action, this._state.profilePage);
    messagesReducer(action, this._state.messagesPage);
    this._rerenderEntireTree(this._state);
  },
};

export default store;

window.store = store;
