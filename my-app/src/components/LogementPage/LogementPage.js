import React from "react";
import "/Users/maximilienproville/Desktop/FORMATION Openclassrooms/Projet_11_Kasa/my-app/src/components/LogementPage/Description/Description.css";

import { Header } from "../Header/Header";

import { PhotoGallery } from "./PhotoGallery/PhotoGallery";
import { LogementMain } from "./LogementMain/LogementMain";

import { Description } from "./Description/Description";
import { Equipements } from "./Equipements/Equipements";

import { Footer } from "../Footer/Footer";

import { locations } from "/Users/maximilienproville/Desktop/FORMATION Openclassrooms/Projet_11_Kasa/my-app/src/location.js";

export default class LogementPage extends React.Component {
  render() {
    return (
      <>
        <Header />
        <PhotoGallery locations={locations} />
        <LogementMain locations={locations} />
        <div className="DescAndEquipment">
          <Description locations={locations} />
          <Equipements locations={locations} />
        </div>
        <Footer />
      </>
    );
  }
}
