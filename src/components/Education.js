import React, { Component } from "react";
import TextBox from "./TextBox";

export default class Education extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="education-container">
        <h1 className="title">Education & Learning</h1>
        <TextBox />
      </div>
    );
  }
}
