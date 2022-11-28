let store = {
  _state: {
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
      { value: "Привет" },
      { value: "Как дела" },
      { value: "Как дела" },
    ],

    postsData: [
      { id: 1, text: "YEEES", likes: 21 },
      { id: 2, text: "GG", likes: 21 },
      { id: 3, text: "Hahahahaha", likes: 21 },
      { id: 4, text: "Alexandeeer", likes: 21 },
    ],

    newPostText: "",
  },
  getState() {
    return this._state;
  },
  _rerenderEntireTree() {
    console.log("state changed");
  },
  updateNewPostText(newText) {
    this._state.newPostText = newText;
    this._rerenderEntireTree(this._state);
  },
  reloader(observer) {
    this._rerenderEntireTree = observer;
  },
  dispatch(action){
    if(action.type === 'ADD-POST'){
      let newPost = {
        id: 5,
        text: this._state.newPostText,
        likes: 0,
      };
      this._state.postsData.push(newPost);
      this._rerenderEntireTree(this._state);
    }
    else if (action.type === 'UPDATE-NEW-POST-TEXT'){
      this._state.newPostText = action.text;
      this._rerenderEntireTree(this._state);
    }
  },
};

export default store;

window.store = store;
