import React from "react";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="d-flex justify-content-center align-items-center">
        ❮❯ Por
        <p>Kevin Jonás Busto</p>
        {new Date().getFullYear()}
      </div>
    </footer>
  );
};

export default Footer;
