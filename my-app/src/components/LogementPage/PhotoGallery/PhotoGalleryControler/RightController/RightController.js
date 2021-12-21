import React from "react";
import "/Users/maximilienproville/Desktop/FORMATION Openclassrooms/Projet_11_Kasa/my-app/src/components/LogementPage/PhotoGallery/PhotoGalleryControler/RightController/RightController.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

export class RightController extends React.Component {
  render() {
    return (
      <button onClick={this.props.toggle} disabled={this.props.active}>
        <FontAwesomeIcon icon={faAngleRight} className="arrow2" size="7x" />
      </button>
    );
  }
}
