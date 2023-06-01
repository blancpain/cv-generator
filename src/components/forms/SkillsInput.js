import React, { Component } from "react";

export default class SkillsInput extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    const { id, updateValues, skillsInfo } = this.props;

    return (
      <section className="skills-input" id={id}>
        <h1 className="title">Skills</h1>
        <form className="skills-input--form">
          <input
            type="text"
            placeholder="Skill"
            name="value"
            onChange={updateValues}
            value={skillsInfo.value}
          />
          <button className="add">Add</button>
          <button className="delete">Delete</button>
        </form>
      </section>
    );
  }
}
