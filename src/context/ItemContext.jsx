import { useState, useEffect, createContext } from "react";

const ItemsContext = createContext();

export function ItemProvider({ children }) {
  const [personajes, setPersonajes] = useState([]);
  const [personajesArray, setPersonajesArray] = useState([]);
  const [personaje, setPersonaje] = useState(null);
  const [cargando, setCargando] = useState(0);
  const [inputBuscar, setInputBuscar] = useState("");

  let index = 1;
  let cantTotal = 731;
  let auxData = [];

  const getPersonajes = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    auxData.push(data);

    if (cargando <= 10) {
      setCargando(Math.floor((auxData.length * 100) / cantTotal));
    }

    if (data.error != "" && index <= cantTotal) {
      index++;
      if (
        data.biography?.publisher === "Marvel Comics" ||
        data.biography?.publisher === "DC Comics" ||
        data.biography?.publisher === "Superman Prime One-Million" ||
        data.biography?.publisher === "Deadpool" ||
        data.biography?.publisher === "Evil Deadpool" ||
        data.biography?.publisher === "Anti-Venom" ||
        data.biography?.publisher === "Scorpion"
      ) {
        setPersonajes((personajes) => {
          return [...personajes, data];
        });
        setPersonajesArray((personajes) => {
          return [...personajes, data];
        });
      }
      getPersonajes(
        `https://www.superheroapi.com/api.php/3219074728386143/${index}`
      );
    } else {
      index = 1;
      auxData = [];
      return 0;
    }
  };

  const getPersonaje = (id) => {
    fetch(`https://www.superheroapi.com/api.php/3219074728386143/${id}`)
      .then((res) => res.json())
      .then((json) => setPersonaje(json));
  };

  const buscarPersonaje = (value) => {
    setInputBuscar(value);
  };

  useEffect(() => {
    getPersonajes("https://www.superheroapi.com/api.php/3219074728386143/1");
  }, []);

  useEffect(() => {}, [personajesArray]);

  useEffect(() => {
    let arrayAux = [];
    personajesArray.map(
      (p, i) =>
        (p.name.toLowerCase().includes(inputBuscar.toLowerCase().trim()) ||
          p.biography.publisher
            .toLowerCase()
            .includes(inputBuscar.toLowerCase().trim())) &&
        arrayAux.push(p)
    );
    setPersonajes(arrayAux);
  }, [inputBuscar]);

  return (
    <ItemsContext.Provider
      value={{
        personajes,
        personaje,
        getPersonaje,
        getPersonajes,
        buscarPersonaje,
        inputBuscar,
        cargando,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
}

export default ItemsContext;
