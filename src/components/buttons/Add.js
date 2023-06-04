import React from "react";

export default function Add({ tag, addElement }) {
  return (
    // add closure in order to pass tag as an arg
    <button className="add" onClick={() => addElement(tag)}>
      Add
    </button>
  );
}
