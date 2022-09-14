import logo from "../../logo.svg";
import "./App.css";
import Header from "../Header/Header";
import Profile from "../Profile/Profile";
import Sidebar from "../Sidebar/Sidebar";

const App = () => {
  return (
    <div /* className="app-wrapper" */>
      <Header />
      <div className="app-wrapper">
      <Sidebar />
      <Profile />
      </div>
    </div>
  );
};

export default App;
