import { useState, useEffect, createContext } from "react";

const ItemsContext = createContext();

export function ItemProvider({ children }) {
  const [personajes, setPersonajes] = useState([]);
  const [personaje, setPersonaje] = useState(null);
  const [episodios, setEpisodios] = useState([]);
  const [episodio, setEpisodio] = useState(null);
  const [locacion, setLocacion] = useState(null);
  const [inputBuscar, setInputBuscar] = useState("");

  const getPersonajes = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setPersonajes((personajes) => {
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

  useEffect(() => {
    getPersonajes("https://rickandmortyapi.com/api/character/");
    getEpisodios("https://rickandmortyapi.com/api/episode");
  }, []);

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
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
}

export default ItemsContext;
