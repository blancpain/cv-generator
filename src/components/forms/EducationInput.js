import React from "react";
import Delete from "../buttons/Delete";

export default function EducationInput({
  id,
  updateValues,
  educationInfo,
  deleteElements,
  tag,
}) {
  const currentElem = educationInfo.find((elem) => elem.id === id);

  return (
    <form className="education-input--form" id={id}>
      <input
        type="text"
        placeholder="Degree / course"
        name="degree"
        onChange={updateValues}
        value={currentElem.degree}
      />
      <input
        type="text"
        placeholder="Name of institution"
        name="institution"
        onChange={updateValues}
        value={currentElem.institution}
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
      <Delete tag={tag} deleteElements={deleteElements} />
    </form>
  );
}
