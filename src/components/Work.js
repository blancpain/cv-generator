import React, { Component } from "react";
import TextBox from "./TextBox";

export default class Work extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="work-container">
        <h1 className="title">Work experience</h1>
        <TextBox />
        <TextBox />
        <TextBox />
      </div>
    );
  }
}
