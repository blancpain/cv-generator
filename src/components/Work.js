import React, { Component } from "react";

export default class Work extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    const { jobTitle, employer, startDate, endDate, comments } = this.props;

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
      <div className="work-container">
        <h1 className="title">Work experience</h1>
        <div className="text-box-container">
          <h3 className="work-title">{jobTitle}</h3>
          <h4 className="sub-title">
            {employer}, {convertedStartDate} - {convertedEndDate}
          </h4>
          <p className="free-text">{comments}</p>
        </div>
      </div>
    );
  }
}
