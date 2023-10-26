import React, { useState, useContext } from "react";
import ItemsContext from "../context/ItemContext";
import CardPersonaje from "../components/CardPersonaje";
import ReactPaginate from "react-paginate";
import "../styles/home.css";

const Home = () => {
  const { personajesArray, personajes, buscarPersonaje } =
    useContext(ItemsContext);

  let auxEspecies = [],
    especies = [],
    auxEstado = [],
    estado = [];

  if (!personajes) {
    return <h3>Cargando...</h3>;
  }

  personajesArray?.map((p) => {
    auxEspecies.push(p.species);
    auxEstado.push(p.status);
  });

  especies = auxEspecies.filter((e, i) => {
    return auxEspecies.indexOf(e) === i;
  });

  estado = auxEstado.filter((e, i) => {
    return auxEstado.indexOf(e) === i;
  });

  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 20;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = personajes.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(personajes.length / itemsPerPage);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % personajes.length;
    setItemOffset(newOffset);
  };

  return (
    <div
      className="home-container mx-auto w-100"
      style={{ maxWidth: "1300px" }}
    >
      <div className="row m-0 pt-3 pb-2">
        <div className="d-flex justify-content-center">
          <input
            className="input-buscar"
            type="text"
            onChange={(e) => buscarPersonaje(e.target.value)}
            placeholder="buscar personaje"
          />
        </div>
      </div>
      <div className="row m-0 resultados">
        <p>{"Resultados: " + personajes.length}</p>
      </div>
      <div className="row m-0">
        {currentItems &&
          currentItems?.map((p) => <CardPersonaje key={p.id} p={p} />)}
      </div>
      <div className="d-flex justify-content-center">
        <ReactPaginate
          className="paginacion"
          breakLabel="..."
          nextLabel="Siguiente"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="Anterior"
          renderOnZeroPageCount={null}
        />
      </div>
    </div>
  );
};

export default Home;
