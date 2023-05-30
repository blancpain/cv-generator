import React, { Component } from "react";

export default class TextBox extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="text-box-container">
        <h3 className="work-title">Product designer</h3>
        <h4 className="sub-title">Fintef, Oct 2019 - Present</h4>
        <p className="free-text">
          Designing end-to-end experience for financial products on mobile & web
          platforms. Working closely with managers, marketing specialists and
          developers.
        </p>
      </div>
    );
  }
}
