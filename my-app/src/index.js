import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import "./index.css";

import HomePage from "./components/HomePage/HomePage";
import AProposPage from "/Users/maximilienproville/Desktop/FORMATION Openclassrooms/Projet_11_Kasa/my-app/src/components/AProposPage/AProposPage.js";
import ErrorPage from "/Users/maximilienproville/Desktop/FORMATION Openclassrooms/Projet_11_Kasa/my-app/src/components/ErrorPage/ErrorPage.js";

ReactDOM.render(
  <React.StrictMode>
    <HomePage />
    <AProposPage />
    <ErrorPage />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
