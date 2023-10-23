import { useState, useEffect, createContext } from "react";

const ItemsContext = createContext();

export function ItemProvider({ children }) {
  const [personajes, setPersonajes] = useState(null);
  const [personaje, setPersonaje] = useState(null);
  const [episodios, setEpisodios] = useState(null);
  const [episodio, setEpisodio] = useState(null);

  const [character, setCharacter] = useState([]);

  const getPersonajes = () => {
    fetch(`https://rickandmortyapi.com/api/character`)
      .then((res) => res.json())
      .then((json) => setPersonajes(json));
  };
  // let i = 42;
  // const all = () => {
  //   if (i > 0) {
  //     fetch(`https://rickandmortyapi.com/api/character/?page=${i}`)
  //       .then((res) => res.json())
  //       .then((json) => {
  //         setCharacter([...character, json]);
  //         i--;
  //       });
  //   }
  // };

  const getPersonaje = (id) => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then((json) => setPersonaje(json));
  };

  const getEpisodios = () => {
    fetch(`https://rickandmortyapi.com/api/episode`)
      .then((res) => res.json())
      .then((json) => setEpisodios(json));
  };

  const getEpisodio = (url_fetch) => {
    fetch(`${url_fetch}`)
      .then((res) => res.json())
      .then((json) => setEpisodio(json));
  };

  useEffect(() => {
    getPersonajes();
    getEpisodios();
    // all();
  }, []);

  // useEffect(() => {
  //   all();
  //   i--;
  //   console.log(i);
  // }, [character]);

  return (
    <ItemsContext.Provider
      value={{
        personajes,
        personaje,
        getPersonaje,
        episodios,
        episodio,
        getEpisodio,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
}

export default ItemsContext;
