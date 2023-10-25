import { useState, useEffect, createContext } from "react";

const ItemsContext = createContext();

export function ItemProvider({ children }) {
  const [personajes, setPersonajes] = useState([]);
  const [personajesArray, setPersonajesArray] = useState([]);
  const [personaje, setPersonaje] = useState(null);
  const [episodios, setEpisodios] = useState([]);
  const [episodio, setEpisodio] = useState(null);
  const [locacion, setLocacion] = useState(null);

  const [inputBuscar, setInputBuscar] = useState("");
  const [filtroEstado, setFiltroEstado] = useState("");
  const [filtroEspecie, setFiltroEspecie] = useState("");

  const getPersonajes = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setPersonajes((personajes) => {
      return [...personajes, ...data.results];
    });
    setPersonajesArray((personajes) => {
      return [...personajes, ...data.results];
    });

    if (data.info && data.info.next) {
      getPersonajes(data.info.next);
    }
  };

  const getPersonaje = (id) => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then((json) => setPersonaje(json));
  };

  const getEpisodios = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setEpisodios((episodios) => {
      return [...episodios, ...data.results];
    });
    if (data.info && data.info.next) {
      getEpisodios(data.info.next);
    }
  };

  const getEpisodio = (url_fetch) => {
    fetch(`${url_fetch}`)
      .then((res) => res.json())
      .then((json) => setEpisodio(json));
  };

  const getLocacion = (id) => {
    fetch(`https://rickandmortyapi.com/api/location/${id}`)
      .then((res) => res.json())
      .then((json) => setLocacion(json));
  };

  const buscarPersonaje = (value) => {
    setInputBuscar(value);
  };

  const filtrarPorEstado = (value) => {
    setFiltroEstado(value);
  };

  const filtrarPorEspecie = (value) => {
    setFiltroEspecie(value);
  };

  useEffect(() => {
    getPersonajes("https://rickandmortyapi.com/api/character/");
    getEpisodios("https://rickandmortyapi.com/api/episode");
  }, []);

  useEffect(() => {
    let arrayAux = [];
    personajesArray.map(
      (p, i) =>
        p.name.toLowerCase().includes(inputBuscar.toLowerCase().trim()) &&
        arrayAux.push(p)
    );
    setPersonajes(arrayAux);
  }, [inputBuscar]);

  useEffect(() => {
    let arrayAux = [];

    if (filtroEspecie === "default" && filtroEstado === "default") {
      arrayAux = [...personajesArray];
      return 0;
    }

    console.log(filtroEspecie);

    setPersonajes(arrayAux);
  }, [filtroEspecie, filtroEstado]);

  return (
    <ItemsContext.Provider
      value={{
        personajes,
        personaje,
        getPersonaje,
        getPersonajes,
        episodios,
        episodio,
        getEpisodio,
        locacion,
        getLocacion,
        buscarPersonaje,
        inputBuscar,
        personajesArray,
        filtrarPorEstado,
        filtrarPorEspecie,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
}

export default ItemsContext;
