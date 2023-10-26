import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { ItemProvider } from "./context/ItemContext";
import "./styles/app.css";

const App = () => {
  return (
    <ItemProvider>
      <div className="d-flex flex-column min-vh-100">
        <Header />
        <Main />
        <Footer />
      </div>
    </ItemProvider>
  );
};

export default App;
