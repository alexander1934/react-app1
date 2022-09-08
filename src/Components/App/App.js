import logo from "../../logo.svg";
import "./App.css";
import Header from "../Header/Header";
import Content from "../Content/Content";
import Sidebar from "../Sidebar/Sidebar";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Sidebar />
      <Content />
    </div>
  );
};

export default App;
