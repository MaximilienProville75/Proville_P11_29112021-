import React from "react";
import "./Location.css";

class Location extends React.Component {
  render() {
    return (
      <div className="Location">
        <div className="LocationImg">
          <img src={this.props.cover} alt="location" />
        </div>
        <div className="LocationName">
          <p>{this.props.title}</p>
        </div>
      </div>
    );
  }
}

export default Location;
