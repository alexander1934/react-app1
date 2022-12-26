import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Profile from "../Profile/Profile";
import Sidebar from "../Sidebar/Sidebar";
import News from "../News/News";
import Music from "./../Music/Music";
import Settings from "../Settings/Settings";
import MessagesContainer from "./../Messages/MessagesContainer";
import Users from "../Users/Users";

const App = (props) => {
  return (
    <div className="app">
      <Header />
      <div className="app-wrapper">
        <Sidebar />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/messages/*" element={<MessagesContainer />} />
            <Route path="/news/*" element={<News />} />
            <Route path="/music/*" element={<Music />} />
            <Route path="/settings/*" element={<Settings />} />
            <Route path="/users/*" element={<Users />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
