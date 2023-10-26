import React from "react";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="d-flex flex-column">
      <div className="api-footer-url d-flex justify-content-center align-items-center">
        <h5>Api: </h5>
        <a href="https://superheroapi.com/" target="_blank">
          Superheroapi.com
        </a>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        ❮❯ Por
        <p>Kevin Jonás Busto</p>
        {new Date().getFullYear()}
      </div>
    </footer>
  );
};

export default Footer;
