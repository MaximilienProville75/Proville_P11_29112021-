import React from "react";
import "/Users/maximilienproville/Desktop/FORMATION Openclassrooms/Projet_11_Kasa/my-app/src/components/LogementPage/Equipements/Equipements.css";

export default class Equipements extends React.Component {
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
