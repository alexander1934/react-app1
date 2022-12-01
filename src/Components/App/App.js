import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Profile from "../Profile/Profile";
import Sidebar from "../Sidebar/Sidebar";
import Messages from "../Messages/Messages";
import News from "../News/News";
import Music from "./../Music/Music";
import Settings from "../Settings/Settings";

const App = (props) => {
  return (
      <div className="app">
        <Header />
        <div className="app-wrapper">
          <Sidebar />
          <div className="app-wrapper-content">
            <Routes>
              <Route path="/profile" element={<Profile posts={props.state.postsData} dispatch={props.dispatch} newPostText = {props.state.newPostText}/>} />
              <Route path="/messages/*" element={<Messages dialogs={props.state.userData} messages={props.state.messagesData} dispatch ={props.dispatch} newMessageText = {props.state.newMessageText}/>}/>
              <Route path="/news/*" element={<News />} />
              <Route path="/music/*" element={<Music />} />
              <Route path="/settings/*" element={<Settings />} />
            </Routes>
          </div>
        </div>
      </div>
  );
};

export default App;
