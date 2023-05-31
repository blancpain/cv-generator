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
import { nanoid } from "nanoid";

// use: id: nanoid()

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
      workExperience: [
        {
          id: nanoid(),
          jobTitle: "Full Stack Web Engineer",
          employer: "Self taught",
          startDate: "2021-06-01",
          endDate: "",
          comments:
            "Doing the amazing Odin Project! Learning about web dev using HTMl, CSS, JavaScript, React and much more.",
        },
      ],
      workInputElems: [<WorkInput key={nanoid()} id={nanoid()} />],
      education: [],
      skills: [],
    };
  }

  handlePersonalInfoChange = (e) => {
    const { value, name } = e.target;
    this.setState({
      personalInfo: {
        ...this.state.personalInfo,
        [name]: value,
      },
    });
  };

  render() {
    const allWorkExperience = this.state.workExperience.map((item) => {
      return (
        <Work
          key={item.id}
          jobTitle={item.jobTitle}
          employer={item.employer}
          startDate={item.startDate}
          endDate={item.endDate}
          comments={item.comments}
        />
      );
    });
    const allWorkInputElements = this.state.workInputElems.map((item) => item);

    return (
      <div className="content--container">
        <div className="content--input">
          <PersonalInput
            updateValues={this.handlePersonalInfoChange}
            personalInfo={this.state.personalInfo}
          />
          {allWorkInputElements}
          <EducationInput />
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
            {allWorkExperience}
            <Education />
            <Skills />
          </main>
        </div>
      </div>
    );
  }
}
