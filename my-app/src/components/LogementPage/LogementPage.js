import React from "react";
import "./Description/Description.css";

import { Header } from "../Header/Header";

import { PhotoGallery } from "./PhotoGallery/PhotoGallery";
import { LogementMain } from "./LogementMain/LogementMain";

import { Description } from "./Description/Description";
import { Equipements } from "./Equipements/Equipements";

import { Footer } from "../Footer/Footer";

// import {
//   locations,
//   getInvoice,
// } from "/Users/maximilienproville/Desktop/FORMATION Openclassrooms/Projet_11_Kasa/my-app/src/location.js";

import { useParams } from "react-router-dom";

const withRouter = (WrappedComponent) => (props) => {
  const params = useParams();
  return <WrappedComponent {...props} params={params} />;
};

class LogementPage extends React.Component {
  componentDidMount() {
    // fetch tes donnees
    //
  }

  render() {
    // if (isNotValid) {
    //   return <Navigate to
    // }

    const actualUrlId = this.props.params.locationId;
    console.log(actualUrlId);

    return (
      <>
        {/* <Header />
        <PhotoGallery locations={this.props.location.invoiceId} />
        <LogementMain locations={this.props.location.invoiceId} />
        <div className="DescAndEquipment">
          <Description locations={this.props.location.invoiceId} />
          <Equipements locations={this.props.location.invoiceId} />
        </div>
        <Footer /> */}
        <div>blbllblbl</div>
      </>
    );
  }
}

export default withRouter(LogementPage);
