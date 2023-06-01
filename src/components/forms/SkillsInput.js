import React, { Component } from "react";
import Delete from "../buttons/Delete";

export default class SkillsInput extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    const { id, updateValues, skillsInfo } = this.props;
    const currentElem = skillsInfo.find((elem) => elem.id === id);

    //todo conditionally style the button below in skills; need to create a styles var and pass as props

    return (
      <form className="skills-input--form" id={id}>
        <input
          type="text"
          placeholder="Skill"
          name="value"
          onChange={updateValues}
          value={currentElem.value}
        />
        <Delete />
      </form>
    );
  }
}
