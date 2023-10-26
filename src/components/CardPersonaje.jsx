import React from "react";
import { Link } from "react-router-dom";
import "../styles/card-personaje.css";

const CardPersonaje = ({ p }) => {
  return (
    <div className="col-12 col-md-6">
      <div className="d-flex card-p">
        <div className="d-flex">
          <img className="img-fluid" src={p.image.url} alt="" />
        </div>
        <div className="d-flex flex-column contain-p">
          <div className="titulo-p">
            <Link to={"/personaje/" + p.id}>{p.name}</Link>
            <div className="d-flex align-items-center">
              {(p.biography?.publisher === "Marvel Comics" ||
                p.biography?.publisher === "Deadpool" ||
                p.biography?.publisher === "Anti-Venom" ||
                p.biography?.publisher === "Evil Deadpool" ||
                p.biography?.publisher === "Scorpion") && (
                <div className="d-flex logo-marca">
                  <img
                    className="img-fluid"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/2560px-Marvel_Logo.svg.png"
                    alt="marvel_comics.png"
                  />
                </div>
              )}
              {(p.biography.publisher === "DC Comics" ||
                p.biography.publisher === "Superman Prime One-Million") && (
                <div className="d-flex logo-marca">
                  <img
                    className="img-fluid"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/DC_Comics_logo.png/768px-DC_Comics_logo.png"
                    alt="dc_comics.png"
                  />
                </div>
              )}
              {p.biography.publisher === "Dark Horse Comics" && (
                <div className="d-flex logo-marca">
                  <img
                    className="img-fluid"
                    src="/src/assets/Dark_Horse_Comics_logo.svg.png"
                    alt="dark_horse.png"
                  />
                </div>
              )}
              {p.biography.publisher === "NBC - Heroes" && (
                <div className="d-flex logo-marca">
                  <img
                    className="img-fluid"
                    src="/src/assets/NBC_logo_2011.png"
                    alt="nbc.png"
                  />
                </div>
              )}
              {p.biography.publisher === "Wildstorm" && (
                <div className="d-flex logo-marca">
                  <img
                    className="img-fluid"
                    src="/src/assets/wildstorm.png"
                    alt="wildstorm.png"
                  />
                </div>
              )}
              {p.biography.publisher === "Image Comics" && (
                <div className="d-flex logo-marca">
                  <img
                    className="img-fluid"
                    src="/src/assets/452px-Image_Comics_logo.svg.png"
                    alt="image_comics.png"
                  />
                </div>
              )}
              <p>
                {p.biography?.publisher}
                {p.appearance.race != "null" && " - " + p.appearance.race}
              </p>
            </div>
          </div>
          <div className="info-p">
            <p>Primera aparición:</p>
            <p>
              {p.biography["first-appearance"].slice(0, 80) +
                (p.biography["first-appearance"].length > 80 ? "..." : "")}
            </p>
          </div>
          <div className="info-p">
            <p>Alineación:</p>
            <p>{p.biography.alignment}</p>
          </div>
          <div className="info-p">
            <p>Genero:</p>
            <p>{p.appearance.gender}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPersonaje;
