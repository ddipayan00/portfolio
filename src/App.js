import './App.css';
import Test from "./Test";
import User from "./User";
import Home from "./Home";
import UserProfile from "./UserProfile";
import Navigation from "./Navigation";
import ExtraTest from "./ExtraTest";
import { Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<User />} />
          <Route path="/user/:id" element={<UserProfile />} />
          <Route path="/navigation" element={<Navigation/>} />
          <Route path="/test" element={<Test/>} />
          <Route path="/extra" element={<ExtraTest/>} />
        </Routes>
    </div>
  );
}

export default App;
