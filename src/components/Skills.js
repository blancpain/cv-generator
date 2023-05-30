import React, { Component } from "react";

export default class Skills extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="skills-container">
        <h1 className="title">Skills</h1>
        <ul>
          <li>Skill 1</li>
          <li>Skill 2</li>
          <li>Skill 3</li>
          <li>Skill 4</li>
          <li>Skill 5</li>
        </ul>
      </div>
    );
  }
}
