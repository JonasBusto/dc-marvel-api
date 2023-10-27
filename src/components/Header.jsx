import React, { useEffect, useState, useContext } from "react";
import ItemsContext from "../context/ItemContext";
import { Link } from "react-router-dom";
import "../styles/header.css";

const Header = () => {
  return (
    <header>
      <Link to="/" className="titulo-header">
        <img
          className="img-fluid"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/2560px-Marvel_Logo.svg.png"
          alt="marvel_comics.png"
        />
        <img
          className="img-fluid"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/DC_Comics_logo.png/768px-DC_Comics_logo.png"
          alt="dc_comics.png"
        />
        API
      </Link>
    </header>
  );
};

export default Header;
