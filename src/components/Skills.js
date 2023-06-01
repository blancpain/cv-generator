import React, { Component } from "react";

export default class Skills extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  //TODO fix below to have the title in the App component
  //todo for the below we should also move the ul to App js and just add LIs

  render() {
    const { value, id } = this.props;
    return <li id={id}>{value}</li>;
  }
}
