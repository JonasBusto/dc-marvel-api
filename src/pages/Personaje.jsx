import React, { useContext, useEffect } from "react";
import ItemsContext from "../context/ItemContext";
import { useParams, Link } from "react-router-dom";
import "../styles/card-personaje.css";
import "../styles/personaje.css";

const Personaje = () => {
  const { personaje, getPersonaje, buscarPersonaje } = useContext(ItemsContext);
  const { id } = useParams();

  useEffect(() => {
    getPersonaje(id);
  }, []);

  buscarPersonaje("");

  if (!personaje) {
    return <h2>Cargando...</h2>;
  }

  return (
    <div
      className="home-container mx-auto py-5 w-100"
      style={{ maxWidth: "1000px" }}
    >
      <div className="row m-0">
        <div className="col-12 d-flex justify-content-center">
          <div className="d-flex img-personaje">
            <img className="img-fluid" src={personaje?.image.url} alt="img" />
          </div>
          <div className="d-flex flex-column contain-p pt-0 w-100">
            <div className="titulo-p">
              <Link to={"/personaje/" + personaje?.id}>{personaje?.name}</Link>
              <div className="d-flex align-items-center">
                <div className="info-p">
                  <p>Editorial:</p>
                  {(personaje?.biography.publisher === "Marvel Comics" ||
                    personaje?.biography?.publisher === "Deadpool" ||
                    personaje?.biography?.publisher === "Anti-Venom" ||
                    personaje?.biography?.publisher === "Evil Deadpool" ||
                    personaje?.biography?.publisher === "Scorpion") && (
                    <div className="d-flex logo-marca-personaje">
                      <img
                        className="img-fluid"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/2560px-Marvel_Logo.svg.png"
                        alt="marvel_comics.png"
                      />
                    </div>
                  )}
                  {(personaje?.biography.publisher === "DC Comics" ||
                    personaje?.biography.publisher ===
                      "Superman Prime One-Million") && (
                    <div className="d-flex logo-marca-personaje">
                      <img
                        className="img-fluid"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/DC_Comics_logo.png/768px-DC_Comics_logo.png"
                        alt="dc_comics.png"
                      />
                    </div>
                  )}
                  {personaje?.biography.publisher === "Dark Horse Comics" && (
                    <div className="d-flex logo-marca-personaje">
                      <img
                        className="img-fluid"
                        src="/src/assets/Dark_Horse_Comics_logo.svg.png"
                        alt="dark_horse.png"
                      />
                    </div>
                  )}
                  {personaje?.biography.publisher === "NBC - Heroes" && (
                    <div className="d-flex logo-marca-personaje">
                      <img
                        className="img-fluid"
                        src="/src/assets/NBC_logo_2011.png"
                        alt="nbc.png"
                      />
                    </div>
                  )}
                  {personaje?.biography.publisher === "Wildstorm" && (
                    <div className="d-flex logo-marca-personaje">
                      <img
                        className="img-fluid"
                        src="/src/assets/wildstorm.png"
                        alt="wildstorm.png"
                      />
                    </div>
                  )}
                  {personaje?.biography.publisher === "Image Comics" && (
                    <div className="d-flex logo-marca-personaje">
                      <img
                        className="img-fluid"
                        src="/src/assets/452px-Image_Comics_logo.svg.png"
                        alt="image_comics.png"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="info-p">
              <p>Primera aparición:</p>
              <p>{personaje?.biography["first-appearance"]}</p>
            </div>
            <div className="info-p">
              <p>Alineación:</p>
              <p>{personaje?.biography.alignment}</p>
            </div>
            <div className="info-p">
              <p>Genero:</p>
              <p>{personaje?.appearance.gender}</p>
            </div>
            <div className="info-p">
              <p>Lugar de nacimiento:</p>
              <p>{personaje?.biography["place-of-birth"]}</p>
            </div>
          </div>
        </div>
        <div className="col-12 d-flex mt-3 flex-column info-p">
          <p style={{ fontSize: "0.8rem" }}>Mas caracteristicas:</p>
          <div className="d-flex flex-column">
            <div className="info-p">
              <p>Bibliografia:</p>
              <div className="lista-info">
                <div className="d-flex align-items-center">
                  <div></div>
                  <div className="d-flex align-items-center lista-item-info">
                    <p>Nombre completo: </p>
                    <p>{personaje?.biography["full-name"]}</p>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <div></div>
                  <div className="d-flex align-items-center lista-item-info">
                    <p>Alter Ego: </p>
                    <p>{personaje?.biography["alter-egos"]}</p>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <div></div>
                  <div className="d-flex align-items-center lista-item-info">
                    <p>Alias: </p>
                    <p>{personaje?.biography?.aliases[0]}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="info-p">
              <p>Estadísticas de poder:</p>
              <div className="lista-info">
                <div className="d-flex align-items-center">
                  <div></div>
                  <div className="d-flex align-items-center lista-item-info">
                    <p>Inteligencia: </p>
                    <p>{personaje?.powerstats.intelligence}</p>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <div></div>
                  <div className="d-flex align-items-center lista-item-info">
                    <p>Fuerza: </p>
                    <p>{personaje?.powerstats.strength}</p>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <div></div>
                  <div className="d-flex align-items-center lista-item-info">
                    <p>Velocidad: </p>
                    <p>{personaje?.powerstats.speed}</p>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <div></div>
                  <div className="d-flex align-items-center lista-item-info">
                    <p>Durabilidad: </p>
                    <p>{personaje?.powerstats.durability}</p>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <div></div>
                  <div className="d-flex align-items-center lista-item-info">
                    <p>Poder: </p>
                    <p>{personaje?.powerstats.power}</p>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <div></div>
                  <div className="d-flex align-items-center lista-item-info">
                    <p>Combate: </p>
                    <p>{personaje?.powerstats.combat}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="info-p">
              <p>Apariencia:</p>
              <div className="lista-info">
                <div className="d-flex align-items-center">
                  <div></div>
                  <div className="d-flex align-items-center lista-item-info">
                    <p>Raza: </p>
                    <p>
                      {personaje?.appearance.race != "null"
                        ? personaje?.appearance.race
                        : "-"}
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <div></div>
                  <div className="d-flex align-items-center lista-item-info">
                    <p>Altura: </p>
                    <p>{personaje?.appearance.height[1]}</p>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <div></div>
                  <div className="d-flex align-items-center lista-item-info">
                    <p>Ancho: </p>
                    <p>{personaje?.appearance.weight[1]}</p>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <div></div>
                  <div className="d-flex align-items-center lista-item-info">
                    <p>Color de ojos: </p>
                    <p>{personaje?.appearance["eye-color"]}</p>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <div></div>
                  <div className="d-flex align-items-center lista-item-info">
                    <p>Color de pelo: </p>
                    <p>{personaje?.appearance["hair-color"]}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="info-p">
              <p>Trabajo:</p>
              <div className="lista-info">
                <div className="d-flex align-items-center">
                  <div></div>
                  <div className="d-flex align-items-center lista-item-info">
                    <p>Ocupación: </p>
                    <p>{personaje?.work.occupation}</p>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <div></div>
                  <div className="d-flex align-items-center lista-item-info">
                    <p>Base: </p>
                    <p>{personaje?.work.base}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="info-p">
              <p>Conexiones:</p>
              <div className="lista-info">
                <div className="d-flex align-items-center">
                  <div></div>
                  <div className="d-flex align-items-center lista-item-info">
                    <p>Afiliación a un grupo: </p>
                    <p>{personaje?.connections["group-affiliation"]}</p>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <div></div>
                  <div className="d-flex align-items-center lista-item-info">
                    <p>Parientes: </p>
                    <p>{personaje?.connections.relatives}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Personaje;
