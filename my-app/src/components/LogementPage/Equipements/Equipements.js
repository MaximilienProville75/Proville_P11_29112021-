import React from "react";
import "./Equipements.css";

export class Equipements extends React.Component {
  render() {
    return (
      <div className="Equipements">
        <div className="EquipTitle">
          <p>Équipements</p>
        </div>
        <div className="EquiUl">
          <ul>
            {this.props.locations.equipments.map((equipment) => {
              return <li>{equipment}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  }
}
