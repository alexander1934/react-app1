import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Content from "./Content";
import Sidebar from "./Sidebar";

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
