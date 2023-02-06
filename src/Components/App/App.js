import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import News from "../News/News";
import Music from "./../Music/Music";
import Settings from "../Settings/Settings";
import MessagesContainer from "./../Messages/MessagesContainer";
import UsersContainer from './../Users/UsersContainer';
import ProfileContainer from './../Profile/ProfileContainer';

const App = (props) => {
  return (
    <div className="app">
      <Header />
      <div className="app-wrapper">
        <Sidebar />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/profile/*" element={<ProfileContainer />} />
            <Route path="/messages/*" element={<MessagesContainer />} />
            <Route path="/news/*" element={<News />} />
            <Route path="/music/*" element={<Music />} />
            <Route path="/settings/*" element={<Settings />} />
            <Route path="/users/*" element={<UsersContainer />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
