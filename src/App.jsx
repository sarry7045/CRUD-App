import React from "react";
import { Routes, Route } from "react-router-dom";
import PageNotFound from "./Components/PageNotFound";
import Navbar from "./Components/NavBar";
import AddUser from "./Components/AddUser.jsx";
import AllUser from "./Components/AllUsers.jsx";
import EditUser from "./Components/EditUser.jsx";
import Home from "./Components/Home.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/all" element={<AllUser />}></Route>
        <Route exact path="/add" element={<AddUser />}></Route>
        <Route exact path="/edit/:id" element={<EditUser />}></Route>

        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
