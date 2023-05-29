import React, { Component } from "react";
import "./styles/styles.css";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Education from "./components/Education";

export default class App extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main--container">
        <Header />
        <main>
          <Work />
          <Education />
          <Skills />
        </main>
      </div>
    );
  }
}
