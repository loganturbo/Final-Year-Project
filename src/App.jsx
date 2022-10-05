import React from "react";
import NavBar from "./components/navbar/navbar";
import Temperature from "./components/temperature/temperature";
import Home from "./components/home/home";
import Humidity from "./components/humidity/humidity";
import Logout from "./components/logout/logout";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/temperature" element={<Temperature />} />
          <Route path="/humidity" element={<Humidity />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
