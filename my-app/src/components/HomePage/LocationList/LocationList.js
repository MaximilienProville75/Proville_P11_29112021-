import React from "react";
import "LocationList.css";
import Location from "./Location/Location";

class LocationList extends React.Component {
  render() {
    return (
      <div className="LocationList">
        {this.props.locations.map((location) => {
          return <Location location={location} />;
        })}
      </div>
    );
  }
}

export default LocationList;
