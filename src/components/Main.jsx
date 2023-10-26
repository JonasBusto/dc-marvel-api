import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Personaje from "../pages/Personaje";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/personaje/:id" element={<Personaje />} />
      </Routes>
    </main>
  );
};

export default Main;
