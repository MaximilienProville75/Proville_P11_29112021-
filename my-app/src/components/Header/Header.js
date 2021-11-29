import React from "react";
import "./Header.css";
import { ReactComponent as Logo } from "/Users/maximilienproville/Desktop/FORMATION Openclassrooms/Projet_11_Kasa/my-app/src/logo.svg";

export class Header extends React.Component {
  render() {
    return (
      <div className="Header">
        <div className="HeaderLogo">
          <Logo />
        </div>
        <div className="Header_Ul">
          <ul className="HeaderUl">
            <li className="HeaderLi">
              <a href="https://www.youtube.com/watch?v=kMiBrqV_4FA">Accueil</a>
            </li>
            <li className="HeaderLi">
              <a href="my-app/src/components/AProposPage/AProposPage.js">
                A propos
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
