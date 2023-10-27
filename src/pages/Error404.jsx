import React from "react";
import { Link } from "react-router-dom";
import "../styles/error404.css";

const Error404 = () => {
  return (
    <div className="error404-contain d-flex flex-column align-items-center pt-4">
      <p>Error 404</p>
      <div>
        <p>Pagina no encontrada</p>
      </div>
      <Link to="/">Volver al inicio</Link>
    </div>
  );
};

export default Error404;
