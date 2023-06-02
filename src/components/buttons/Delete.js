import React, { Component } from "react";

export default class Delete extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    const { tag, deleteElements } = this.props;

    return (
      <button className="delete" onClick={(e) => deleteElements(e, tag)}>
        Delete
      </button>
    );
  }
}
