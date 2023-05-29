import React, { Component } from "react";

export default class Header extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header>
        <div className="header--shape-divider">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"
            />
          </svg>
        </div>
        <div className="header--left">
          <h3>Full Stack Web Engineer</h3>
          <h1>Yasen Dimitrov</h1>
        </div>
        <div className="header--right">
          <ul>
            <li>y_dimitrov@ymail.com</li>
            <li>https://www.linkedin.com/in/yasdim/</li>
            <li>+359 882 392 556</li>
          </ul>
        </div>
      </header>
    );
  }
}
