import React from "react";

export default function Education({
  degree,
  institution,
  startDate,
  endDate,
  id,
}) {
  // convert dates (if provided) to presentable format
  let convertedStartDate =
    startDate === ""
      ? ""
      : `${new Date(startDate).toLocaleString("default", {
          month: "long",
        })} ${new Date(startDate).getFullYear()}`;
  let convertedEndDate =
    endDate === ""
      ? ""
      : `${new Date(endDate).toLocaleString("default", {
          month: "long",
        })} ${new Date(endDate).getFullYear()}`;

  return (
    <div className="text-box-container" id={id}>
      <h3 className="education-title">{degree}</h3>
      <h4 className="sub-title">
        {institution}, {convertedStartDate} - {convertedEndDate}
      </h4>
    </div>
  );
}
