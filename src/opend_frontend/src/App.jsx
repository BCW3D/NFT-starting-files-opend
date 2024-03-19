import { useState } from "react";
import { opend_backend } from "declarations/opend_backend";

import "bootstrap/dist/css/bootstrap.min.css";

import homeImage from "../public/home-img.png";

import Header from "../src/components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <main>
      <Header />
      <img className="bottom-space" src={homeImage} />
      <Footer />
    </main>
  );
}

export default App;
