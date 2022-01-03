import React from "react";
import "./Footer.css";
import { ReactComponent as Logo2 } from "../../logoWhite.svg";

import { Link } from "react-router-dom";

export class Footer extends React.Component {
  render() {
    return (
      <div className="Footer">
        <div className="FooterLogo">
          <Link to="/home">
            <Logo2 />
          </Link>
        </div>
        <div className="FooterCopyright">
          <p>© 2020 Kasa. All rights reserved</p>
        </div>
      </div>
    );
  }
}
