import React from "react";
import "../LogementPage/LogementPage.css";

import { Header } from "../Header/Header";

import { PhotoGallery } from "./PhotoGallery/PhotoGallery";
import { LogementMain } from "./LogementMain/LogementMain";

import { Description } from "./Description/Description";
import { Equipements } from "./Equipements/Equipements";

import { Footer } from "../Footer/Footer";
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
    fetch("/location.json")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          this.setState({
            isLoaded: true,
            items: result,
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

    if (!isLoaded) return null;
    const singleIdValue = items.forEach((location) => {
      arrayId.push(location.id);
    });

    if (!arrayId.includes(actualUrlId) && isLoaded) {
      return <Navigate to={"/error404"} />;
    } else {
      const locationIdentifierValues = items.filter(
        (item) => item.id === actualUrlId
      );
      const locationIdentified = locationIdentifierValues[0];

      return (
        <>
          <Header />
          <PhotoGallery items={locationIdentified} />
          <LogementMain items={locationIdentified} />
          <div className="DescAndEquipment">
            <Description items={locationIdentified} />
            <Equipements>
              {locationIdentified.equipments.map((equipment, idx) => {
                return <li key={idx}>{equipment}</li>;
              })}
            </Equipements>
          </div>
          <Footer />
        </>
      );
    }
  }
}

export default withRouter(LogementPage);
