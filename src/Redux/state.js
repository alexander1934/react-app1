let rerenderEntireTree;

let state = {
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
      {id:1, text:"YEEES", likes:21},
      {id:2, text:"GG", likes:21},
      {id:3, text:"Hahahahaha", likes:21},
      {id:4, text:"Alexandeeer", likes:21},
    ],

    newPostText: "",
};

window.state = state;

export let addPost = () => {
  let newPost = {
    id: 5,
    text: state.newPostText,
    likes: 0,
  }
  state.postsData.push(newPost);
  rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
  state.newPostText = newText;
  rerenderEntireTree(state);
}

export const reloader = (observer) => {
  rerenderEntireTree = observer;
}

export default state