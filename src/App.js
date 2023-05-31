import React, { Component } from "react";
import "./styles/styles.css";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Education from "./components/Education";
import PersonalInput from "./components/forms/PersonalInput";
import WorkInput from "./components/forms/WorkInput";
import EducationInput from "./components/forms/EducationInput";
import SkillsInput from "./components/forms/SkillsInput";

export default class App extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="content--container">
        <div className="content--input">
          <PersonalInput />
          <hr className="rounded"></hr>
          <WorkInput />
          <hr className="rounded"></hr>
          <EducationInput />
          <hr className="rounded"></hr>
          <SkillsInput />
        </div>
        {/* <div className="content--CV">
          <Header />
          <main>
            <Work />
            <Education />
            <Skills />
          </main>
        </div> */}
      </div>
    );
  }
}
