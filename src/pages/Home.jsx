import React, { useContext } from "react";
import ItemsContext from "../context/ItemContext";
import CardPersonaje from "../components/CardPersonaje";
import "../styles/home.css";

const Home = () => {
  const { personajes, getPersonajes } = useContext(ItemsContext);
  const url_filtro = "https://rickandmortyapi.com/api/character/?page=";

  if (!personajes) {
    return <h3>Cargando...</h3>;
  }

  return (
    <div
      className="home-container mx-auto w-100"
      style={{ maxWidth: "1300px" }}
    >
      <div className="row m-0">
        {personajes?.map((p) => (
          <CardPersonaje key={p.id} p={p} />
        ))}
      </div>
      <div className="d-flex justify-content-center"></div>
    </div>
  );
};

export default Home;
