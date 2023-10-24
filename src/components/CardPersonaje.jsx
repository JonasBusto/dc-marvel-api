import React from "react";
import { Link } from "react-router-dom";
import "../styles/card-personaje.css";

const CardPersonaje = ({ p }) => {
  return (
    <div className="col-12 col-md-6">
      <div className="d-flex card-p">
        <div className="d-flex">
          <img className="img-fluid" src={p.image} alt="" />
        </div>
        <div className="d-flex flex-column contain-p">
          <div className="titulo-p">
            <Link to={"/personaje/" + p.id}>{p.name}</Link>
            <div className="d-flex align-items-center">
              {p.status === "Alive" && (
                <div className="item-color item-color-l"></div>
              )}
              {p.status === "Dead" && (
                <div className="item-color item-color-d"></div>
              )}
              {p.status === "unknown" && (
                <div className="item-color item-color-u"></div>
              )}
              <p>{p.status + " - " + p.species}</p>
            </div>
          </div>
          <div className="info-p">
            <p>Última ubicación conocida:</p>
            <p>{p.location.name}</p>
          </div>
          <div className="info-p">
            <p>Visto por primera vez en:</p>
            <p>{p.origin.name}</p>
          </div>
          <div className="info-p">
            <p>Genero:</p>
            <p>{p.gender}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPersonaje;
