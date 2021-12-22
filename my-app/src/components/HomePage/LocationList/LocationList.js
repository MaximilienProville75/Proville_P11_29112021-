import React from "react";
import "./LocationList.css";
import Location from "./Location/Location";

import { Link } from "react-router-dom";

export class LocationList extends React.Component {
  render() {
    return (
      <div className="LocationList">
        {this.props.locations.map((location) => {
          return (
            <Link to={`/logement/${location.id}`} key={location.id}>
              <Location location={location} />
            </Link>
          );
        })}
      </div>
    );
  }
}
