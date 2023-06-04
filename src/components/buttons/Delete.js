import React from "react";

export default function Delete({ tag, deleteElements }) {
  return (
    <button className="delete" onClick={(e) => deleteElements(e, tag)}>
      Delete
    </button>
  );
}
