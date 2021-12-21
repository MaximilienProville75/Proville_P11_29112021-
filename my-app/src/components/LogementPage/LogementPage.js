import React from "react";
import "../LogementPage/LogementPage.css";

import { Header } from "../Header/Header";

import { PhotoGallery } from "./PhotoGallery/PhotoGallery";
import { LogementMain } from "./LogementMain/LogementMain";

import { Description } from "./Description/Description";
import { Equipements } from "./Equipements/Equipements";

import { Footer } from "../Footer/Footer";
import { locations } from "../../location";
import { Navigate } from "react-router-dom";

import { useParams } from "react-router-dom";

const withRouter = (WrappedComponent) => (props) => {
  const params = useParams();
  return <WrappedComponent {...props} params={params} />;
};

class LogementPage extends React.Component {
  render() {
    const actualUrlId = this.props.params.locationId;
    console.log(locations);

    let arrayId = [];
    const singleIdValue = locations.forEach((location) => {
      arrayId.push(location.id);
    });

    if (!arrayId.includes(actualUrlId)) {
      return <Navigate to={"/error404"} />;
    } else {
      const locationIdentifierValues = locations.filter(
        (location) => location.id === actualUrlId
      );
      const locationIdentified = locationIdentifierValues[0];

      return (
        <>
          <Header />
          <PhotoGallery locations={locationIdentified} />
          <LogementMain locations={locationIdentified} />
          <div className="DescAndEquipment">
            <Description locations={locationIdentified} />
            <Equipements locations={locationIdentified} />
          </div>
          <Footer />
        </>
      );
    }
  }
}

export default withRouter(LogementPage);
