import React, { Component } from "react";

export default class Skills extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    const { value, id } = this.props;
    return <li id={id}>{value}</li>;
  }
}
