import React from "react";
import "./HomePage.css";

import { Header } from "../Header/Header";
import { LocationList } from "./LocationList/LocationList.js";
import { Footer } from "../Footer/Footer.js";

import bannerImg from "../../bannerhero.svg";

import { locations } from "../../location.js";

class HomePage extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div className="BannerHero">
          <img className="BannerHeroImg" src={bannerImg} alt="CliffsSeaside" />
        </div>

        <LocationList locations={locations} />
        <Footer />
      </>
    );
  }
}

export default HomePage;
