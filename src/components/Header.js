import React, { Component } from "react";
import { Icon } from "@iconify/react";

export default class Header extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    const { firstName, lastName, currentJobTitle, email, linkedIn, phone } =
      this.props;

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
          <h3 className="title">{currentJobTitle}</h3>
          <h1 className="name">
            {firstName} {lastName}
          </h1>
        </div>
        <div className="header--right">
          <ul className="header--list">
            <li>
              <Icon
                icon="ic:outline-email"
                color="#ca6d18"
                width="25"
                height="25"
              />
              {email}
            </li>
            <li>
              <Icon
                icon="mdi:linkedin"
                color="#ca6d18"
                width="25"
                height="25"
              />
              {linkedIn}
            </li>
            <li>
              <Icon icon="ph:phone" color="#ca6d18" width="25" height="25" />
              {phone}
            </li>
          </ul>
        </div>
      </header>
    );
  }
}
