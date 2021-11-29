import React from "react";
import "/Users/maximilienproville/Desktop/FORMATION Openclassrooms/Projet_11_Kasa/my-app/src/components/LogementPage/Description/Description.css";

export default class Description extends React.Component {
  render() {
    return (
      <div className="Description">
        <div className="DescTitle">
          <p>Description</p>
        </div>
        <div className="DescContent">
          <p>{this.props.locations.description}</p>
        </div>
      </div>
    );
  }
}
