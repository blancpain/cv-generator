import React, { Component } from "react";

export default class WorkInput extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    const { id, updateValues, workInfo } = this.props;

    //todo fix below (and in other input components to move the h1 and section to App so only form remains)
    return (
      <section className="work-input" id={id}>
        <h1 className="title">Work experience</h1>
        <form className="work-input--form">
          <input
            type="text"
            placeholder="Job title"
            name="jobTitle"
            onChange={updateValues}
            value={workInfo.jobTitle}
          />
          <input
            type="text"
            placeholder="Name of employer"
            name="employer"
            onChange={updateValues}
            value={workInfo.employer}
          />
          <input
            type="date"
            name="startDate"
            onChange={updateValues}
            value={workInfo.startDate}
          />
          <input
            type="date"
            name="endDate"
            onChange={updateValues}
            value={workInfo.endDate}
          />
          <textarea
            name="comments"
            placeholder="Describe your position here..."
            onChange={updateValues}
            value={workInfo.comments}
          />
          <button className="add">Add</button>
          <button className="delete">Delete</button>
        </form>
        <hr className="rounded"></hr>
      </section>
    );
  }
}
