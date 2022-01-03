import React from "react";
import "./DropDownList.css";
import DropDown from "./DropDown/DropDown.js";

export class DropDownList extends React.Component {
  render() {
    return (
      <div className="InfosList">
        {this.props.informationsData.map((information, idx) => {
          return <DropDown key={idx} information={information} />;
        })}
      </div>
    );
  }
}
