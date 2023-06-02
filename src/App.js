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
import Add from "./components/buttons/Add";
import { nanoid } from "nanoid";

export default class App extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);

    // initial IDs to link input elements with UI element
    this.initialWorkExperienceID = nanoid();
    this.initialEducationHistoryID = nanoid();
    this.initialSkillsID = nanoid();

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
          id: this.initialWorkExperienceID,
          jobTitle: "Full Stack Web Engineer",
          employer: "Self taught",
          startDate: "2021-06-01",
          endDate: "",
          comments:
            "Going through the amazing curriculum of the Odin Project! Learning all about web dev using HTML, CSS, JavaScript, React and more!",
        },
      ],
      workInputElements: [
        {
          id: this.initialWorkExperienceID,
          updateValues: this.handleWorkExperienceChange,
        },
      ],
      education: [
        {
          id: this.initialEducationHistoryID,
          degree: "International Business Law",
          institution: "Catolica Business School",
          startDate: "2014-09-01",
          endDate: "2015-07-01",
        },
      ],
      educationInputElements: [
        {
          id: this.initialEducationHistoryID,
          updateValues: this.handleEducationExperienceChange,
        },
      ],
      skills: [
        {
          id: this.initialSkillsID,
          value: "Web development",
        },
      ],
      skillsInputElements: [
        {
          id: this.initialSkillsID,
          updateValues: this.handleSkillsChange,
        },
      ],
    };
  }

  resetForm = () => {
    this.setState({
      workExperience: [],
      workInputElements: [],
      education: [],
      educationInputElements: [],
      skills: [],
      skillsInputElements: [],
    });
  };

  handlePersonalInfoChange = (e) => {
    const { value, name } = e.target;
    this.setState({
      personalInfo: {
        ...this.state.personalInfo,
        [name]: value,
      },
    });
  };

  handleWorkExperienceChange = (e) => {
    const { value, name } = e.target;
    const { id } = e.target.parentNode;

    this.setState((prevState) => {
      // iterate over the workExperience array in state and update items if they match w/ id
      // then we return the updated array that includes the old and (any) new items
      const updatedWorkExperience = prevState.workExperience.map(
        (prevWorkExp) => {
          return prevWorkExp.id === id
            ? { ...prevWorkExp, [name]: value }
            : prevWorkExp;
        }
      );

      return {
        workExperience: updatedWorkExperience,
      };
    });
  };

  handleEducationExperienceChange = (e) => {
    const { value, name } = e.target;
    const { id } = e.target.parentNode;

    this.setState((prevState) => {
      const updatedEducationExperience = prevState.education.map(
        (prevEducation) => {
          return prevEducation.id === id
            ? { ...prevEducation, [name]: value }
            : prevEducation;
        }
      );

      return {
        education: updatedEducationExperience,
      };
    });
  };

  handleSkillsChange = (e) => {
    const { value, name } = e.target;
    const { id } = e.target.parentNode;

    this.setState((prevState) => {
      const updatedSkills = prevState.skills.map((prevSkills) => {
        return prevSkills.id === id
          ? { ...prevSkills, [name]: value }
          : prevSkills;
      });

      return {
        skills: updatedSkills,
      };
    });
  };

  addElement = (tag) => {
    const newId = nanoid();

    if (tag === "work") {
      this.setState({
        workInputElements: [
          ...this.state.workInputElements,
          {
            id: newId,
            updateValues: this.handleWorkExperienceChange,
          },
        ],
        workExperience: [
          ...this.state.workExperience,
          {
            id: newId,
            jobTitle: "",
            employer: "",
            startDate: "",
            endDate: "",
            comments: "",
          },
        ],
      });
    } else if (tag === "education") {
      this.setState({
        educationInputElements: [
          ...this.state.educationInputElements,
          {
            id: newId,
            updateValues: this.handleEducationExperienceChange,
          },
        ],
        education: [
          ...this.state.education,
          {
            id: newId,
            degree: "",
            institution: "",
            startDate: "",
            endDate: "",
          },
        ],
      });
    } else if (tag === "skills") {
      this.setState({
        skillsInputElements: [
          ...this.state.skillsInputElements,
          {
            id: newId,
            updateValues: this.handleSkillsChange,
          },
        ],
        skills: [
          ...this.state.skills,
          {
            id: newId,
            value: "",
          },
        ],
      });
    }
  };

  deleteElements = (e, tag) => {
    e.preventDefault();
    const { id } = e.target.parentNode;

    if (tag === "work") {
      this.setState((prevState) => {
        const updatedWorkInputElements = prevState.workInputElements.filter(
          (elem) => elem.id !== id
        );

        return {
          workInputElements: updatedWorkInputElements,
        };
      });

      this.setState((prevState) => {
        const updatedWorkUIElements = prevState.workExperience.filter(
          (elem) => elem.id !== id
        );

        return {
          workExperience: updatedWorkUIElements,
        };
      });
    } else if (tag === "education") {
      this.setState((prevState) => {
        const updatedEducationInputElements =
          prevState.educationInputElements.filter((elem) => elem.id !== id);

        return {
          educationInputElements: updatedEducationInputElements,
        };
      });

      this.setState((prevState) => {
        const updatedEducationUIElements = prevState.education.filter(
          (elem) => elem.id !== id
        );

        return {
          education: updatedEducationUIElements,
        };
      });
    } else if (tag === "skills") {
      this.setState((prevState) => {
        const updatedSkillsInputElements = prevState.skillsInputElements.filter(
          (elem) => elem.id !== id
        );

        return {
          skillsInputElements: updatedSkillsInputElements,
        };
      });

      this.setState((prevState) => {
        const updatedSkillsUIElements = prevState.skills.filter(
          (elem) => elem.id !== id
        );

        return {
          skills: updatedSkillsUIElements,
        };
      });
    }
  };

  render() {
    // work experience
    const allWorkExperience = this.state.workExperience.map((item) => {
      return (
        <Work
          key={item.id}
          id={item.id}
          jobTitle={item.jobTitle}
          employer={item.employer}
          startDate={item.startDate}
          endDate={item.endDate}
          comments={item.comments}
        />
      );
    });
    const allWorkExperienceInputElements = this.state.workInputElements.map(
      (item) => {
        return (
          <WorkInput
            key={item.id}
            id={item.id}
            updateValues={item.updateValues}
            workInfo={this.state.workExperience}
            deleteElements={this.deleteElements}
            tag="work"
          />
        );
      }
    );

    // education
    const allEducation = this.state.education.map((item) => {
      return (
        <Education
          key={item.id}
          id={item.id}
          degree={item.degree}
          institution={item.institution}
          startDate={item.startDate}
          endDate={item.endDate}
        />
      );
    });
    const allEducationInputs = this.state.educationInputElements.map((item) => {
      return (
        <EducationInput
          key={item.id}
          id={item.id}
          updateValues={item.updateValues}
          educationInfo={this.state.education}
          deleteElements={this.deleteElements}
          tag="education"
        />
      );
    });

    // skills
    const allSkills = this.state.skills.map((item) => {
      return <Skills key={item.id} id={item.id} value={item.value} />;
    });
    const allSkillsInputs = this.state.skillsInputElements.map((item) => {
      return (
        <SkillsInput
          key={item.id}
          id={item.id}
          updateValues={item.updateValues}
          skillsInfo={this.state.skills}
          deleteElements={this.deleteElements}
          tag="skills"
        />
      );
    });

    return (
      <div className="content--container">
        <div className="content--input">
          <PersonalInput
            updateValues={this.handlePersonalInfoChange}
            personalInfo={this.state.personalInfo}
          />
          <section className="work-input">
            <h1 className="title">Work experience</h1>
            {allWorkExperienceInputElements}
            <Add tag="work" addElement={this.addElement} />
            {allWorkExperienceInputElements.length !== 0 && (
              <hr className="rounded"></hr>
            )}
          </section>
          <section className="education-input">
            <h1 className="title">Education & learning</h1>
            {allEducationInputs}
            <Add tag="education" addElement={this.addElement} />
            {allEducationInputs.length !== 0 && <hr className="rounded"></hr>}
          </section>
          <section className="skills-input">
            <h1 className="title">Skills</h1>
            {allSkillsInputs}
            <Add tag="skills" addElement={this.addElement} />
            <button className="reset" onClick={this.resetForm}>
              Reset
            </button>
          </section>
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
            <div className="work-container">
              <h1 className="title">Work experience</h1>
              {allWorkExperience}
            </div>
            <div className="education-container">
              <h1 className="title">Education & Learning</h1>
              {allEducation}
            </div>
            <div className="skills-container">
              <h1 className="title">Skills</h1>
              <ul>{allSkills}</ul>
            </div>
          </main>
        </div>
      </div>
    );
  }
}
