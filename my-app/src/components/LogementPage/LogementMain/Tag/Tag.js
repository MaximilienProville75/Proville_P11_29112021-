import React from "react";

export class Tag extends React.Component {
  render() {
    return <li key={this.props.tag}>{this.props.tag}</li>;
  }
}
