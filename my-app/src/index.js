import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import "./index.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./components/HomePage/HomePage";
import AProposPage from "./components/AProposPage/AProposPage.js";
import ErrorPage from "./components/ErrorPage/ErrorPage.js";
import LogementPage from "./components/LogementPage/LogementPage.js";

import { LocationList } from "./components/HomePage/LocationList/LocationList.js";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="aPropos" element={<AProposPage />} />
        <Route path="logement">
          <Route path=":locationId" element={<LogementPage />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/error404" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
