import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Profile from "../Profile/Profile";
import Sidebar from "../Sidebar/Sidebar";
import Messages from "../Messages/Messages";
import News from "../News/News";
import Music from './../Music/Music';
import Settings from "../Settings/Settings";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <div className="app-wrapper">
          <Sidebar />
          <div className="app-wrapper-content">
            <Routes>
              <Route path="/profile" element={<Profile />} />
              <Route path="/messages/*" element={<Messages />} />
              <Route path="/news" element={<News />} />
              <Route path="/music" element={<Music />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
