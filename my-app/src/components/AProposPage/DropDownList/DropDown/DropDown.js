import React from "react";
import "./DropDown.css";
import { FaAngleDown } from "react-icons/fa";

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
        <div className="DropDownChevron">
          <button className="DropDownTitle" onClick={this.showMenu}>
            {this.props.items}
          </button>
          {this.state.showMenu ? (
            <FaAngleDown className="AngleDown rotation" />
          ) : (
            <FaAngleDown className="AngleDown" />
          )}
        </div>
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
