import React from "react";
import Delete from "../buttons/Delete";

export default function SkillsInput({
  id,
  updateValues,
  skillsInfo,
  deleteElements,
  tag,
}) {
  const currentElem = skillsInfo.find((elem) => elem.id === id);

  return (
    <form className="skills-input--form" id={id}>
      <input
        type="text"
        placeholder="Skill"
        name="value"
        onChange={updateValues}
        value={currentElem.value}
      />
      <Delete tag={tag} deleteElements={deleteElements} />
    </form>
  );
}
