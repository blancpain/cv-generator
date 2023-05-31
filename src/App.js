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

    this.state = {
      personalInfo: {
        firstName: "Yasen",
        lastName: "Dimitrov",
        currentJobTitle: "Full Stack Web Engineer",
        email: "random@email.com",
        linkedIn: "https://www.linkedin.com/in/yasdim/",
        phone: "+359 888 888 888",
      },
      workExperience: [],
      education: [],
      skills: [],
    };
  }

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({
      personalInfo: {
        ...this.state.personalInfo,
        [name]: value,
      },
    });
  };

  render() {
    return (
      <div className="content--container">
        <div className="content--input">
          <PersonalInput
            updateValues={this.handleChange}
            personalInfo={this.state.personalInfo}
          />
          <hr className="rounded"></hr>
          <WorkInput />
          <hr className="rounded"></hr>
          <EducationInput />
          <hr className="rounded"></hr>
          <SkillsInput />
        </div>
        <div className="content--CV">
          <Header
            firstName={this.state.personalInfo.firstName}
            lastName={this.state.personalInfo.lastName}
            currentJobTitle={this.state.personalInfo.currentJobTitle}
            email={this.state.personalInfo.email}
            linkedIn={this.state.personalInfo.linkedIn}
            phone={this.state.personalInfo.phone}
          />
          <main>
            <Work />
            <Education />
            <Skills />
          </main>
        </div>
      </div>
    );
  }
}
