import React, { Component } from "react";

export default class WorkInput extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="work-input">
        <h1 className="title">Work experience</h1>
        <form className="work-input--form">
          <input
            type="text"
            placeholder="Job title"
            name="jobTitle"
            // onChange={}
            // value={}
          />
          <input
            type="text"
            placeholder="Name of employer"
            name="employer"
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
          <textarea
            name="work-text"
            placeholder="Describe your position here..."
            // onChange={}
            // value={}
          />
          <button className="add">Add</button>
          <button className="delete">Delete</button>
        </form>
      </section>
    );
  }
}
