import React from "react";
import "/Users/maximilienproville/Desktop/FORMATION Openclassrooms/Projet_11_Kasa/my-app/src/components/LogementPage/PhotoGallery/PhotoGalleryControler/LeftController/LeftController.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faCoffee } from "@fortawesome/free-solid-svg-icons";

export class LeftController extends React.Component {
  render() {
    return (
      <>
        <button onClick={this.props.toggle} disabled={this.props.active}>
          <FontAwesomeIcon icon={faAngleLeft} size="7x" className="arrow" />
        </button>
      </>
    );
  }
}
