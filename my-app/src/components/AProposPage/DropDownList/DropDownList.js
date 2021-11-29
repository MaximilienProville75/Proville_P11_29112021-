import React from "react";
import "./DropDownList.css";
import DropDown from "/Users/maximilienproville/Desktop/FORMATION Openclassrooms/Projet_11_Kasa/my-app/src/components/AProposPage/DropDownList/DropDown/DropDown.js";

export class DropDownList extends React.Component {
  render() {
    return (
      <div className="InfosList">
        {this.props.informationsData.map((information) => {
          return <DropDown information={information} />;
        })}
      </div>
    );
  }
}
