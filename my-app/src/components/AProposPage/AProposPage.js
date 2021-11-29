import React from "react";
import "./AProposPage.css";

import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { DropDownList } from "./DropDownList/DropDownList";

import { informationsData } from "/Users/maximilienproville/Desktop/FORMATION Openclassrooms/Projet_11_Kasa/my-app/src/components/AProposPage/Informations.js";

import bannerImg from "/Users/maximilienproville/Desktop/FORMATION Openclassrooms/Projet_11_Kasa/my-app/src/components/AProposPage/bannerMountain.svg";

class AProposPage extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div className="BannerHero">
          <img
            className="BannerHeroImg"
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
