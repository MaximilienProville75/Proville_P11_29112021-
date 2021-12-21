import React from "react";
import "./Equipements.css";

export class Equipements extends React.Component {
  constructor() {
    super();

    this.state = {
      showMenu: false,
    };

    this.showMenu = this.showMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();

    this.setState({
      showMenu: true,
    });

    this.setState((prevState) => ({
      check: !prevState.check,
    }));
  }

  render() {
    return (
      <div className="DropDown2">
        <button className="DropDownTitle2" onClick={this.showMenu}>
          Équipements
        </button>
        {this.state.showMenu ? (
          <div className="DropDownDescription2">
            <ul>
              {this.props.locations.equipments.map((equipment) => {
                return <li>{equipment}</li>;
              })}
            </ul>
          </div>
        ) : null}
      </div>
    );
  }
}
