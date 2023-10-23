import React, { useContext } from "react";
import ItemsContext from "../context/ItemContext";
import CardPersonaje from "../components/CardPersonaje";
import "../styles/home.css";

const Home = () => {
  const { personajes } = useContext(ItemsContext);

  if (!personajes) {
    return <h3>Cargando...</h3>;
  }

  return (
    <div
      className="home-container mx-auto w-100"
      style={{ maxWidth: "1300px" }}
    >
      <div className="row m-0">
        {personajes?.results.map((p) => (
          <CardPersonaje key={p.id} p={p} />
        ))}
      </div>
    </div>
  );
};

export default Home;
