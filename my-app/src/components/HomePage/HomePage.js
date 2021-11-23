import React from "react";
import "./HomePage.css";

import { Header } from "../Header/Header";
import { LocationList } from "./LocationList/LocationList";
import { Footer } from "../Footer/Footer";

class HomePage extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div className="BannerHero">
          <img className="BannerHeroImg" src="my-app/src/IMG.png" alt="" />
          <p className="BannerHeroText">Chez vous, partout et ailleurs</p>
        </div>
        <LocationList locations={locations} />
        <Footer />
      </>
    );
  }
}

export default HomePage;
