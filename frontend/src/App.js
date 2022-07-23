import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import TextLinkExample from "./components/Navbar";
import Hero from "./components/posts/Posts";
import Users from "./components/users/Users";
import Login from "./components/Login/Login";

const App = () => {
  return (
    <div>
      <TextLinkExample />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={<Login />} />

        <Route path="/users" element={<Users />} />
      </Routes>
    </div>
  );
};

export default App;
