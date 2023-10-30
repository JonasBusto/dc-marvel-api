import React, { useState, useContext } from "react";
import ItemsContext from "../context/ItemContext";
import CardPersonaje from "../components/CardPersonaje";
import ReactPaginate from "react-paginate";
import "../styles/home.css";
import { useEffect } from "react";

const Home = () => {
  const {
    personajes,
    buscarPersonaje,
    inputBuscar,
    cargando,
    filtrarOrdenAZ,
    filtrarPorNivelPoder,
    filtrarPorEditorial,
  } = useContext(ItemsContext);

  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    setItemOffset(0);
  }, [inputBuscar]);

  if (cargando < 101) {
    return (
      <div
        className="d-flex align-items-center pt-5 mx-auto"
        style={{ maxWidth: "1300px" }}
      >
        <div className="container-cargando">
          <div className="progress progress-striped">
            <div
              className="progress-bar"
              style={{
                width: cargando + "%",
              }}
            >
              <p className="numero-carga">{cargando + "%"}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

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
      <div className="row m-0 filtros d-flex justify-content-center">
        <div>
          <select
            name="filtro-a-z"
            id="filtro-a-z"
            onChange={(e) => filtrarOrdenAZ(e.target.value)}
          >
            <option value="a-z">A-Z</option>
            <option value="z-a">Z-A</option>
          </select>
        </div>
        <div hidden>
          <select
            name="filtro-por-editorial"
            id="filtro-por-editorial"
            onChange={(e) => filtrarPorNivelPoder(e.target.value)}
          >
            <option value="todos">Todos</option>
            <option value="mayor-poder">Mayor poder</option>
            <option value="menor-poder">Menor Poder</option>
          </select>
        </div>
        <div>
          <select
            name="filtro-por-editorial"
            id="filtro-por-editorial"
            onChange={(e) => filtrarPorEditorial(e.target.value)}
          >
            <option value="todos">Todos</option>
            <option value="DC Comics">DC Comics</option>
            <option value="Marvel Comics">Marvel Comics</option>
          </select>
        </div>
      </div>
      <div className="row mt-2 resultados">
        <p>{"Resultados: " + personajes.length}</p>
      </div>
      <div className="row m-0">
        {inputBuscar.trim() !== ""
          ? personajes?.map((p) => <CardPersonaje key={p.id} p={p} />)
          : currentItems?.map((p) => <CardPersonaje key={p.id} p={p} />)}
      </div>
      {inputBuscar.trim() === "" && (
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
      )}
    </div>
  );
};

export default Home;
