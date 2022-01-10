import React from "react";
import "../LogementMain/LogementMain.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Tag } from "./Tag/Tag";

export class LogementMain extends React.Component {
  render() {
    let MainRate = this.props.items.rating;
    let intMainRate = parseInt(MainRate);
    let remain = 5 - intMainRate;

    return (
      <div className="LogementMain">
        <div className="MainTitleAndProfil">
          <div className="TitleLocation">
            <h1>{this.props.items.title}</h1>
            <p>{this.props.items.location}</p>
          </div>
          <div className="HostProfil">
            <p>{this.props.items.host.name}</p>
            <img
              src={this.props.items.host.picture}
              alt={this.props.items.host.name}
            />
          </div>
        </div>
        <div className="TagRating">
          <div className="TagList">
            <ul>
              {this.props.items.tags.map((tag) => {
                return <Tag key={tag} tag={tag} />;
              })}
            </ul>
          </div>
          <div className="StarRatings">
            {[...Array(intMainRate)].map((el, index) => (
              <FontAwesomeIcon
                key={index}
                icon={faStar}
                className="star"
                size="lg"
              />
            ))}
            {[...Array(remain)].map((el, index) => (
              <FontAwesomeIcon
                key={index}
                icon={faStar}
                className="emptyStar"
                size="lg"
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
