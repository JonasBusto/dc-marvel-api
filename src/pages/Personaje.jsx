import React, { useContext, useEffect } from "react";
import ItemsContext from "../context/ItemContext";
import { useParams, Link } from "react-router-dom";
import "../styles/card-personaje.css";
import "../styles/personaje.css";

const Personaje = () => {
  const { personaje, getPersonaje, episodios, getEpisodio } =
    useContext(ItemsContext);
  const episodio = "https://rickandmortyapi.com/api/episode/";
  let arrayAux = [];
  const { id } = useParams();

  useEffect(() => {
    getPersonaje(id);
  }, []);

  if (!personaje && !episodios) {
    return <h2>Cargando...</h2>;
  }

  personaje?.episode.map((e) => arrayAux.push(e.split(episodio)[1]));

  let arrayEpisodios = [];

  for (let i = 0; i < episodios?.length; i++) {
    for (let j = 0; j < arrayAux.length; j++) {
      if (episodios[i].id == arrayAux[j]) {
        arrayEpisodios.push(episodios[i]);
      }
    }
  }

  return (
    <div
      className="home-container mx-auto pt-5 w-100"
      style={{ maxWidth: "1000px" }}
    >
      <div className="row m-0">
        <div className="col-12 d-flex justify-content-center">
          <div className="d-flex img-personaje">
            <img className="img-fluid" src={personaje?.image} alt="img" />
          </div>
          <div className="d-flex flex-column contain-p pt-0 w-100">
            <div className="titulo-p">
              <Link>{personaje?.name}</Link>
              <div className="d-flex align-items-center">
                {personaje?.status === "Alive" && (
                  <div className="item-color item-color-l"></div>
                )}
                {personaje?.status === "Dead" && (
                  <div className="item-color item-color-d"></div>
                )}
                {personaje?.status === "unknown" && (
                  <div className="item-color item-color-u"></div>
                )}
                <p>{personaje?.status + " - " + personaje?.species}</p>
              </div>
            </div>
            <div className="info-p">
              <p>Última ubicación conocida:</p>
              <p>{personaje?.location.name}</p>
            </div>
            <div className="info-p">
              <p>Visto por primera vez en:</p>
              <p>{personaje?.origin.name}</p>
            </div>
            <div className="info-p">
              <p>Genero:</p>
              <p>{personaje?.gender}</p>
            </div>
            <div className="info-p">
              <p>Tipo:</p>
              <p>{personaje?.type === "" ? "-" : personaje?.type}</p>
            </div>
          </div>
        </div>
        <div className="col-12 d-flex mt-3 flex-column">
          <p>Episodios:</p>
          <div className="d-flex flex-column">
            {arrayEpisodios.map((e) => (
              <div
                key={e.id}
                className="d-flex flex-column episodio-container mt-1"
              >
                <div className="d-flex align-items-center">
                  <div className="item-list-episodios"></div>
                  <p>
                    Episodio "{e.name}" - ({e.episode})
                  </p>
                </div>
                <p>Fecha de estreno: {e.air_date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Personaje;
