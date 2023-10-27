import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Personaje from "../pages/Personaje";
import Error404 from "../pages/Error404";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error404 />} />
        <Route path="/personaje/:id" element={<Personaje />} />
      </Routes>
    </main>
  );
};

export default Main;
