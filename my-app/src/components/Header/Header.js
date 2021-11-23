import React from "react";
import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <div className="Header">
        <div className="HeaderLogo">
          <img src="my-app/public/logo.svg" alt="" />
        </div>
        <div className="Header_Ul">
          <ul className="HeaderUl">
            <li className="HeaderLi">
              <a href="https://www.youtube.com/watch?v=kMiBrqV_4FA">Accueil</a>
            </li>
            <li className="HeaderLi">
              <a href="https://www.youtube.com/watch?v=kMiBrqV_4FA">A propos</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
