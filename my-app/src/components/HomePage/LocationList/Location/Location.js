import React from "react";
import "./Location.css";

class Location extends React.Component {
  render() {
    return (
      <div className="Location" data-title={this.props.location.id}>
        <div className="LocationImg">
          <img src={this.props.location.cover} alt="location" />
        </div>
        <div className="LocationName">
          <p>{this.props.location.title}</p>
        </div>
      </div>
    );
  }
}

export default Location;
