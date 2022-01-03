import React from "react";
import "../LeftController/Controller.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

export class Controller extends React.Component {
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
