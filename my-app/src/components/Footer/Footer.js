import React from "react";
import "./Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <div className="Footer">
        <div className="FooterLogo">
          <img src="my-app/public/logo.svg" alt="" />
        </div>
        <div className="FooterCopyright">
          <p>"© 2020 Kasa. All rights reserved"</p>
        </div>
      </div>
    );
  }
}

export default Footer;
