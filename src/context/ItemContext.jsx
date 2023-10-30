import { useState, useEffect, createContext } from "react";

const ItemsContext = createContext();

export function ItemProvider({ children }) {
  const [personajes, setPersonajes] = useState([]);
  const [personajesArray, setPersonajesArray] = useState([]);
  const [personaje, setPersonaje] = useState(null);
  const [cargando, setCargando] = useState(0);
  const [inputBuscar, setInputBuscar] = useState("");
  const [selectOrden, setSelectOrden] = useState("");
  const [selectPoder, setSelectPoder] = useState("");
  const [selectEditorial, setSelectEditorial] = useState("");

  let index = 1;
  let cantTotal = 100;
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

  const filtrarOrdenAZ = (value) => {
    setSelectOrden(value);
  };

  const filtrarPorNivelPoder = (value) => {
    setSelectPoder(value);
  };

  const filtrarPorEditorial = (value) => {
    setSelectEditorial(value);
  };

  useEffect(() => {
    getPersonajes("https://www.superheroapi.com/api.php/3219074728386143/1");
  }, []);

  useEffect(() => {}, [personajesArray]);

  useEffect(() => {
    let arrayAux = [];
    let arrayAuxPersonajes = [...personajesArray];

    if (selectEditorial === "todos") {
      arrayAuxPersonajes = [...personajesArray];
    } else if (selectEditorial === "DC Comics") {
      arrayAuxPersonajes = personajesArray.filter(
        (e) => e?.biography.publisher === "DC Comics"
      );
    } else if (selectEditorial === "Marvel Comics") {
      arrayAuxPersonajes = personajesArray.filter(
        (e) => e?.biography.publisher === "Marvel Comics"
      );
    }

    if (selectOrden === "a-z") {
      function compare(obj1, obj2) {
        if (obj1.name > obj2.name) {
          return 1;
        } else if (obj1.name < obj2.name) {
          return -1;
        } else {
          return 0;
        }
      }
      arrayAuxPersonajes.sort(compare);
    } else if (selectOrden === "z-a") {
      function compare(obj1, obj2) {
        if (obj1.name > obj2.name) {
          return -1;
        } else if (obj1.name < obj2.name) {
          return 1;
        } else {
          return 0;
        }
      }
      arrayAuxPersonajes.sort(compare);
    }

    arrayAuxPersonajes.map(
      (p, i) =>
        (p.name.toLowerCase().includes(inputBuscar.toLowerCase().trim()) ||
          p.biography.publisher
            .toLowerCase()
            .includes(inputBuscar.toLowerCase().trim())) &&
        arrayAux.push(p)
    );
    setPersonajes(arrayAux);
  }, [inputBuscar, selectOrden, selectPoder, selectEditorial]);

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
        filtrarOrdenAZ,
        filtrarPorNivelPoder,
        filtrarPorEditorial,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
}

export default ItemsContext;
