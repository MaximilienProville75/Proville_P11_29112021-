import React from "react";
import "/Users/maximilienproville/Desktop/FORMATION Openclassrooms/Projet_11_Kasa/my-app/src/components/LogementPage/LogementMain/LogementMain.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaStar } from "@fortawesome/free-solid-svg-icons";

export class LogementMain extends React.Component {
  render() {
    // let MainRate = this.props.locations.ratings;
    // let intMainRate = parseInt(MainRate);
    // let StarNb = intMainRate * <FontAwesomeIcon icon={FaStar} />;

    return (
      <div className="LogementMain">
        <div className="MainTitleAndProfil">
          <div className="TitleLocation">
            <p>{this.props.locations.title}</p>
            <p>{this.props.locations.location}</p>
          </div>
          <div className="HostProfil">
            <p>{this.props.locations.host.name}</p>
            <img
              src={this.props.locations.host.picture}
              alt={this.props.locations.host.name}
            />
          </div>
        </div>
        <div className="TagRating">
          <div className="TagList">
            <ul>
              {this.props.locations.tags.map((tag) => {
                return <li>{tag}</li>;
              })}
            </ul>
          </div>
          {/* <div className="StarRatings">{StarNb}</div> */}
        </div>
      </div>
    );
  }
}
