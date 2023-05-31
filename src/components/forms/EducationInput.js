import React, { Component } from "react";

export default class EducationInput extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="education-input">
        <h1 className="title">Education & learning</h1>
        <form className="education-input--form">
          <input
            type="text"
            placeholder="Degree / course"
            name="degree"
            // onChange={}
            // value={}
          />
          <input
            type="text"
            placeholder="Name of institution"
            name="institution"
            // onChange={}
            // value={}
          />
          <input
            type="date"
            name="startDate"
            // onChange={}
            // value={}
          />
          <input
            type="date"
            name="endDate"
            // onChange={}
            // value={}
          />
          <button className="add">Add</button>
          <button className="delete">Delete</button>
        </form>
        <hr className="rounded"></hr>
      </section>
    );
  }
}
