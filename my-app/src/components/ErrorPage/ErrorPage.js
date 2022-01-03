import React from "react";

import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { Link } from "react-router-dom";

import "../ErrorPage/ErrorPage.css";

export default class ErrorPage extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div className="ErrorPage">
          <div className="ErrorMessage">
            <div className="ErrorBig">
              <h1>404</h1>
            </div>
            <div className="ErrorSmall">
              <p>Oups! La page que vous demandez n'existe pas.</p>
            </div>
          </div>
          <div className="ReturnHome">
            <Link to="/home">
              <p>Retourner sur la page d’accueil</p>
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
