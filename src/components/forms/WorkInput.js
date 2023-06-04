import React from "react";
import Delete from "../buttons/Delete";

export default function WorkInput({
  id,
  updateValues,
  workInfo,
  deleteElements,
  tag,
}) {
  // find targeted element in work state array
  const currentElem = workInfo.find((elem) => elem.id === id);

  return (
    <form className="work-input--form" id={id}>
      <input
        type="text"
        placeholder="Job title"
        name="jobTitle"
        onChange={updateValues}
        value={currentElem.jobTitle}
      />
      <input
        type="text"
        placeholder="Name of employer"
        name="employer"
        onChange={updateValues}
        value={currentElem.employer}
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
      <textarea
        name="comments"
        placeholder="Describe your position here..."
        onChange={updateValues}
        value={currentElem.comments}
      />
      <Delete tag={tag} deleteElements={deleteElements} />
    </form>
  );
}
