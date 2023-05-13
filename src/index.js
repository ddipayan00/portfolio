import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';
import Test from "./Test";
import User from "./User";
import UserProfile from "./UserProfile";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="user" element={<User />} />
      <Route path="user/:id" element={<UserProfile />} />
      <Route path="test" element={<Test />} />
    </Routes>
  </BrowserRouter>
);
