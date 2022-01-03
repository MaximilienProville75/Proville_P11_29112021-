import React from "react";
import "./DropDown.css";

class DropDown extends React.Component {
  constructor() {
    super();

    this.state = {
      showMenu: false,
    };

    this.showMenu = this.showMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();

    this.setState((prevState) => ({
      showMenu: !prevState.showMenu,
    }));
  }

  render() {
    return (
      <div className="DropDown">
        <button className="DropDownTitle" onClick={this.showMenu}>
          {this.props.items}
        </button>
        {this.state.showMenu ? (
          <div className="DropDownDescription">
            <ul>{this.props.children}</ul>
          </div>
        ) : null}
      </div>
    );
  }
}

export default DropDown;
