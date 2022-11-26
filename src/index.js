import "./index.css";
import state from "./Redux/state";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./Components/App/App";
import { BrowserRouter } from "react-router-dom";
import { addPost, updateNewPostText, reloader } from "./Redux/state";


const root = ReactDOM.createRoot(document.getElementById("root"));
export let rerenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} addPost={addPost} updateNewPostText = {updateNewPostText}/>
      </BrowserRouter>
    </React.StrictMode>
  );  
}


rerenderEntireTree(state);

reloader(rerenderEntireTree);