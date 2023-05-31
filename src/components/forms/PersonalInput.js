import React, { Component } from "react";

export default class PersonalInput extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="personal-input">
        <h1 className="title">Personal information</h1>
        <form className="personal-input--form">
          <input
            type="text"
            placeholder="First name"
            name="firstName"
            // onChange={}
            // value={}
          />
          <input
            type="text"
            placeholder="Last name"
            name="lastName"
            // onChange={}
            // value={}
          />
          <input
            type="text"
            placeholder="Job title"
            name="currentJobTitle"
            // onChange={}
            // value={}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            // onChange={}
            // value={}
          />
          <input
            type="url"
            placeholder="LinkedIn"
            name="linkedIn"
            // onChange={}
            // value={}
          />
          <input
            type="tel"
            placeholder="Phone number"
            name="tel"
            // onChange={}
            // value={}
          />
        </form>
      </section>
    );
  }
}
