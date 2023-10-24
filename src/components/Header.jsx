import React, { useEffect, useState, useContext } from "react";
import ItemsContext from "../context/ItemContext";
import { Link } from "react-router-dom";
import "../styles/header.css";

const Header = () => {
  const { personajes, buscarPersonaje } = useContext(ItemsContext);
  let auxEspecies = [],
    especies = [];

  personajes?.map((p) => {
    auxEspecies.push(p.species);
  });

  especies = auxEspecies.filter((e, i) => {
    return auxEspecies.indexOf(e) === i;
  });

  return (
    <header>
      <Link to="/" className="titulo-header">
        Rick and Morty API
      </Link>
      <div className="row m-0 pt-1 pb-2">
        <div className="d-flex justify-content-center">
          <input
            className="input-buscar"
            type="text"
            onChange={(e) => buscarPersonaje(e.target.value)}
            placeholder="buscar personaje"
          />
        </div>
      </div>
      <div className="row m-0 pt-1 pb-2">
        <div className="d-flex justify-content-center">
          <select name="filtro-tipo" id="filtro-tipo">
            <option value="alive">Alive</option>
            <option value="dead">Dead</option>
            <option value="unknown">Unknown</option>
          </select>
          <select name="filtro-especie" id="filtro-especie">
            <option value="">Seleccione opción</option>

            {especies.map((e, i) => (
              <option key={i} value={"" + e + ""}>
                {e}
              </option>
            ))}
          </select>
        </div>
      </div>
    </header>
  );
};

export default Header;
