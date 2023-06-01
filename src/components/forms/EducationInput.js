import React, { Component } from "react";

export default class EducationInput extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    const { id, updateValues, educationInfo } = this.props;

    return (
      <section className="education-input" id={id}>
        <h1 className="title">Education & learning</h1>
        <form className="education-input--form">
          <input
            type="text"
            placeholder="Degree / course"
            name="degree"
            onChange={updateValues}
            value={educationInfo.degree}
          />
          <input
            type="text"
            placeholder="Name of institution"
            name="institution"
            onChange={updateValues}
            value={educationInfo.institution}
          />
          <input
            type="date"
            name="startDate"
            onChange={updateValues}
            value={educationInfo.startDate}
          />
          <input
            type="date"
            name="endDate"
            onChange={updateValues}
            value={educationInfo.endDate}
          />
          <button className="add">Add</button>
          <button className="delete">Delete</button>
        </form>
        <hr className="rounded"></hr>
      </section>
    );
  }
}
