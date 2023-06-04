import React, { useRef, useState } from "react";
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
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default function App() {
  // initial IDs to link input elements with UI elements
  const initialWorkExperienceID = nanoid();
  const initialEducationHistoryID = nanoid();
  const initialSkillsID = nanoid();

  // change handlers
  const handlePersonalInfoChange = (e) => {
    const { value, name } = e.target;

    setPersonalInfo({
      ...personalInfo,
      [name]: value,
    });
  };

  const handleWorkExperienceChange = (e) => {
    const { value, name } = e.target;
    const { id } = e.target.parentNode;

    setWorkExperience((prevState) =>
      prevState.map((workExp) => {
        return workExp.id === id ? { ...workExp, [name]: value } : workExp;
      })
    );
  };

  const handleEducationExperienceChange = (e) => {
    const { value, name } = e.target;
    const { id } = e.target.parentNode;

    setEducation((prevState) =>
      prevState.map((education) => {
        return education.id === id
          ? { ...education, [name]: value }
          : education;
      })
    );
  };

  const handleSkillsChange = (e) => {
    const { value, name } = e.target;
    const { id } = e.target.parentNode;

    setSkills((prevState) =>
      prevState.map((skill) => {
        return skill.id === id ? { ...skill, [name]: value } : skill;
      })
    );
  };

  // general functions
  const addElement = (tag) => {
    const newId = nanoid();

    if (tag === "work") {
      setWorkInputElements((prevState) => {
        return [
          ...prevState,
          {
            id: newId,
            updateValues: handleWorkExperienceChange,
          },
        ];
      });

      setWorkExperience((prevState) => {
        return [
          ...prevState,
          {
            id: newId,
            jobTitle: "",
            employer: "",
            startDate: "",
            endDate: "",
            comments: "",
          },
        ];
      });
    } else if (tag === "education") {
      setEducationInputElements((prevState) => {
        return [
          ...prevState,
          {
            id: newId,
            updateValues: handleEducationExperienceChange,
          },
        ];
      });

      setEducation((prevState) => {
        return [
          ...prevState,
          {
            id: newId,
            degree: "",
            institution: "",
            startDate: "",
            endDate: "",
          },
        ];
      });
    } else if (tag === "skills") {
      setSkillsInputElements((prevState) => {
        return [
          ...prevState,
          {
            id: newId,
            updateValues: handleSkillsChange,
          },
        ];
      });

      setSkills((prevState) => {
        return [
          ...prevState,
          {
            id: newId,
            value: "",
          },
        ];
      });
    }
  };

  const deleteElements = (e, tag) => {
    e.preventDefault();
    const { id } = e.target.parentNode;

    if (tag === "work") {
      setWorkInputElements((prevState) =>
        prevState.filter((elem) => {
          return elem.id !== id;
        })
      );

      setWorkExperience((prevState) =>
        prevState.filter((elem) => {
          return elem.id !== id;
        })
      );
    } else if (tag === "education") {
      setEducationInputElements((prevState) =>
        prevState.filter((elem) => {
          return elem.id !== id;
        })
      );

      setEducation((prevState) =>
        prevState.filter((elem) => {
          return elem.id !== id;
        })
      );
    } else if (tag === "skills") {
      setSkillsInputElements((prevState) =>
        prevState.filter((elem) => {
          return elem.id !== id;
        })
      );

      setSkills((prevState) =>
        prevState.filter((elem) => {
          return elem.id !== id;
        })
      );
    }
  };

  const resetForm = () => {
    setPersonalInfo({
      firstName: "",
      lastName: "",
      currentJobTitle: "",
      email: "",
      linkedIn: "",
      phone: "",
    });
    setWorkExperience([]);
    setWorkInputElements([]);
    setEducation([]);
    setEducationInputElements([]);
    setSkills([]);
    setSkillsInputElements([]);
  };

  // generate PDF logic
  //? works OK for ~1 page content, blurry if overflowing
  const [loader, setLoader] = useState(false);
  const contentRef = useRef(null);

  const generatePDF = () => {
    setLoader(true);
    html2canvas(contentRef.current, { scale: 3, logging: true }).then(
      (canvas) => {
        const pdf = new jsPDF("p", "mm", "a4");
        const imgData = canvas.toDataURL("image/png");

        // last 2 params are width and height
        pdf.addImage(imgData, "PNG", 0, 0, 211, 398);
        setLoader(false);
        pdf.save("CV.pdf");
      }
    );
  };

  // state
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "Yasen",
    lastName: "Dimitrov",
    currentJobTitle: "Full Stack Web Engineer",
    email: "random@email.com",
    linkedIn: "https://www.linkedin.com/in/yasdim/",
    phone: "+359 888 888 888",
  });

  const [workExperience, setWorkExperience] = useState([
    {
      id: initialWorkExperienceID,
      jobTitle: "Full Stack Web Engineer",
      employer: "Self taught",
      startDate: "2021-06-01",
      endDate: "",
      comments:
        "Going through the amazing curriculum of the Odin Project! Learning all about web dev using HTML, CSS, JavaScript, React and more!",
    },
  ]);

  const [workInputElements, setWorkInputElements] = useState([
    {
      id: initialWorkExperienceID,
      updateValues: handleWorkExperienceChange,
    },
  ]);

  const [education, setEducation] = useState([
    {
      id: initialEducationHistoryID,
      degree: "International Business Law",
      institution: "Catolica Business School",
      startDate: "2014-09-01",
      endDate: "2015-07-01",
    },
  ]);

  const [educationInputElements, setEducationInputElements] = useState([
    {
      id: initialEducationHistoryID,
      updateValues: handleEducationExperienceChange,
    },
  ]);

  const [skills, setSkills] = useState([
    {
      id: initialSkillsID,
      value: "Web development",
    },
  ]);

  const [skillsInputElements, setSkillsInputElements] = useState([
    {
      id: initialSkillsID,
      updateValues: handleSkillsChange,
    },
  ]);

  // map over comps for rendering
  const allWorkExperience = workExperience.map((item) => {
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

  const allWorkExperienceInputElements = workInputElements.map((item) => {
    return (
      <WorkInput
        key={item.id}
        id={item.id}
        updateValues={item.updateValues}
        workInfo={workExperience}
        deleteElements={deleteElements}
        tag="work"
      />
    );
  });

  const allEducation = education.map((item) => {
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
  const allEducationInputs = educationInputElements.map((item) => {
    return (
      <EducationInput
        key={item.id}
        id={item.id}
        updateValues={item.updateValues}
        educationInfo={education}
        deleteElements={deleteElements}
        tag="education"
      />
    );
  });

  const allSkills = skills.map((item) => {
    return <Skills key={item.id} id={item.id} value={item.value} />;
  });

  const allSkillsInputs = skillsInputElements.map((item) => {
    return (
      <SkillsInput
        key={item.id}
        id={item.id}
        updateValues={item.updateValues}
        skillsInfo={skills}
        deleteElements={deleteElements}
        tag="skills"
      />
    );
  });

  return (
    <div className="content--container">
      <div className="content--title-container">
        <h1>CV Generator</h1>
      </div>
      <div className="content--input">
        <PersonalInput
          updateValues={handlePersonalInfoChange}
          personalInfo={personalInfo}
        />
        <section className="work-input">
          <h1 className="title">Work experience</h1>
          {allWorkExperienceInputElements}
          <Add tag="work" addElement={addElement} />
          {allWorkExperienceInputElements.length !== 0 && (
            <hr className="rounded"></hr>
          )}
        </section>
        <section className="education-input">
          <h1 className="title">Education & learning</h1>
          {allEducationInputs}
          <Add tag="education" addElement={addElement} />
          {allEducationInputs.length !== 0 && <hr className="rounded"></hr>}
        </section>
        <section className="skills-input">
          <h1 className="title">Skills</h1>
          {allSkillsInputs}
          <Add tag="skills" addElement={addElement} />
          <button className="reset" onClick={resetForm}>
            Reset
          </button>
          <button
            className="generate-pdf"
            onClick={generatePDF}
            disabled={!(loader === false)}
          >
            {loader ? <span>Generating</span> : <span>Generate PDF</span>}
          </button>
        </section>
      </div>
      <div className="content--CV" ref={contentRef}>
        <Header
          firstName={personalInfo.firstName}
          lastName={personalInfo.lastName}
          currentJobTitle={personalInfo.currentJobTitle}
          email={personalInfo.email}
          linkedIn={personalInfo.linkedIn}
          phone={personalInfo.phone}
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
