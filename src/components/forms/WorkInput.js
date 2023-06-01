import React, { Component } from "react";
import Delete from "../buttons/Delete";

export default class WorkInput extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    const { id, updateValues, workInfo } = this.props;

    // find targeted element in work state array
    const currentElem = workInfo.find((elem) => elem.id === id);

    return (
      <form className="work-input--form" id={id}>
        <input
          type="text"
          placeholder="Job title"
          name="jobTitle"
          onChange={updateValues}
          value={currentElem.jobTitle}
        />
        <input
          type="text"
          placeholder="Name of employer"
          name="employer"
          onChange={updateValues}
          value={currentElem.employer}
        />
        <input
          type="date"
          name="startDate"
          onChange={updateValues}
          value={currentElem.startDate}
        />
        <input
          type="date"
          name="endDate"
          onChange={updateValues}
          value={currentElem.endDate}
        />
        <textarea
          name="comments"
          placeholder="Describe your position here..."
          onChange={updateValues}
          value={currentElem.comments}
        />
        <Delete />
      </form>
    );
  }
}
