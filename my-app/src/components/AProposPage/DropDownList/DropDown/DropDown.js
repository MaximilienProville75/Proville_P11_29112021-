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

    this.setState({
      showMenu: true,
    });

    this.setState((prevState) => ({
      check: !prevState.check,
    }));
  }

  render() {
    return (
      <div className="DropDown">
        <button className="DropDownTitle" onClick={this.showMenu}>
          {this.props.information.title}
        </button>
        {this.state.showMenu ? (
          <div className="DropDownDescription">
            <p>{this.props.information.description}</p>
          </div>
        ) : null}
      </div>
    );
  }
}

export default DropDown;
