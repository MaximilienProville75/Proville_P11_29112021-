import React from "react";
import "./Description.css";

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
          Description
        </button>
        {this.state.showMenu ? (
          <div className="DropDownDescription2">
            <p>{this.props.items.description}</p>
          </div>
        ) : null}
      </div>
    );
  }
}
