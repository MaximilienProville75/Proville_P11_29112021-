import React from "react";
import "./Header.css";
import { ReactComponent as Logo } from "../../logo.svg";
import { Link } from "react-router-dom";

export class Header extends React.Component {
  render() {
    return (
      <div className="Header">
        <div className="HeaderLogo">
          <Link to="/home">
            <Logo />
          </Link>
        </div>
        <div className="Header_Ul">
          <ul className="HeaderUl">
            <Link to="/home">
              <li className="HeaderLi">Accueil</li>
            </Link>
            <Link to="/aPropos">
              <li className="HeaderLi">A propos</li>
            </Link>
          </ul>
        </div>
      </div>
    );
  }
}
