import React, { Component } from "react";

export default class Add extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    const { tag, addElement } = this.props;

    return (
      // need to add closure in order to pass tag as an arg
      <button className="add" onClick={() => addElement(tag)}>
        Add
      </button>
    );
  }
}
