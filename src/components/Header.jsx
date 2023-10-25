import React, { useEffect, useState, useContext } from "react";
import ItemsContext from "../context/ItemContext";
import { Link } from "react-router-dom";
import "../styles/header.css";

const Header = () => {
  return (
    <header>
      <Link to="/" className="titulo-header">
        Rick and Morty API
      </Link>
    </header>
  );
};

export default Header;
