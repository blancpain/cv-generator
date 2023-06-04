import React from "react";

export default function PersonalInput({ updateValues, personalInfo }) {
  return (
    <section className="personal-input">
      <h1 className="title">Personal information</h1>
      <form className="personal-input--form">
        <input
          type="text"
          placeholder="First name"
          name="firstName"
          onChange={updateValues}
          value={personalInfo.firstName}
        />
        <input
          type="text"
          placeholder="Last name"
          name="lastName"
          onChange={updateValues}
          value={personalInfo.lastName}
        />
        <input
          type="text"
          placeholder="Job title"
          name="currentJobTitle"
          onChange={updateValues}
          value={personalInfo.currentJobTitle}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={updateValues}
          value={personalInfo.email}
        />
        <input
          type="url"
          placeholder="LinkedIn"
          name="linkedIn"
          onChange={updateValues}
          value={personalInfo.linkedIn}
        />
        <input
          type="tel"
          placeholder="Phone number"
          name="phone"
          onChange={updateValues}
          value={personalInfo.phone}
        />
      </form>
      <hr className="rounded"></hr>
    </section>
  );
}
