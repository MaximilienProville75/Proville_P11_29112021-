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

    // this.setState({
    //   showMenu: true,
    // });

    this.setState((prevState) => ({
      // check: !prevState.check,
      showMenu: !prevState.showMenu,
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
              {/* {this.props.items.equipments.map((equipment, idx) => {
                return <li key={idx}>{equipment}</li>;
              })} */}
              {this.props.children}
            </ul>
          </div>
        ) : null}
      </div>
    );
  }
}
