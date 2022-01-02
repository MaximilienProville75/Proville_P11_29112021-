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
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount() {
    fetch("location.json")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded, items } = this.state;

    const actualUrlId = this.props.params.locationId;
    let arrayId = [];
    const singleIdValue = locations.forEach((location) => {
      arrayId.push(location.id);
    });

    if (isLoaded === true) {
      console.log("Data Loaded");
    }

    const singleItem = items.map((item) => {
      return item.title;
    });

    console.log(singleItem);

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
