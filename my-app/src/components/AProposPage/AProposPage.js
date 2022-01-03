import React from "react";
import "./AProposPage.css";

import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { DropDownList } from "./DropDownList/DropDownList";

import { informationsData } from "./Informations.js";

import bannerImg from "../../gustavo-alves-YOXSC4zRcxw-unsplash 1.jpg";

class AProposPage extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div className="BannerHero">
          <img
            className="BannerHeroImgPp"
            src={bannerImg}
            alt="Kalen Emsley Mountain"
          />
        </div>
        <DropDownList informationsData={informationsData} />
        <Footer />
      </>
    );
  }
}

export default AProposPage;
