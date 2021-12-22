import React from "react";
import "/Users/maximilienproville/Desktop/FORMATION Openclassrooms/Projet_11_Kasa/my-app/src/components/LogementPage/LogementMain/LogementMain.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export class LogementMain extends React.Component {
  render() {
    let MainRate = this.props.locations.rating;
    let intMainRate = parseInt(MainRate);
    let remain = 5 - intMainRate;

    return (
      <div className="LogementMain">
        <div className="MainTitleAndProfil">
          <div className="TitleLocation">
            <h1>{this.props.locations.title}</h1>
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
          <div className="StarRatings">
            {[...Array(intMainRate)].map((el, index) => (
              <FontAwesomeIcon icon={faStar} className="star" size="lg" />
            ))}
            {[...Array(remain)].map((el, index) => (
              <FontAwesomeIcon icon={faStar} className="emptyStar" size="lg" />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
