import React from "react";
import "/Users/maximilienproville/Desktop/FORMATION Openclassrooms/Projet_11_Kasa/my-app/src/components/LogementPage/Description/Description.css";

export class Description extends React.Component {
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
          Description
        </button>
        {this.state.showMenu ? (
          <div className="DropDownDescription2">
            <p>{this.props.locations.description}</p>
          </div>
        ) : null}
      </div>
    );
  }
}
