import React from "react";
import "./DropDown.css";

class DropDown extends React.Component {
  render() {
    return (
      <div className="DropDown">
        <div className="DropDownTitle">
          <p>{this.props.information.title}</p>
        </div>
        <div className="DropDownDescription">
          <p>{this.props.information.description}</p>
        </div>
      </div>
    );
  }
}

export default DropDown;
