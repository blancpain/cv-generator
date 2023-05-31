import React, { Component } from "react";

export default class SkillsInput extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="skills-input">
        <h1 className="title">Skills</h1>
        <form className="skills-input--form">
          <input
            type="text"
            placeholder="Skill"
            name="skill"
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
