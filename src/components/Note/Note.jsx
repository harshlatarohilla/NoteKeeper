import React from "react";
import "./styles.css";
function Note() {
  return (
    
      <div className="note-div">
        <h3 className="note-head">heading of note</h3>
        <p className="note-body">
          content of note
          <ul className="note-list">
            <li>one</li>
            <li>two</li>
            <li>three</li>
          </ul>
        </p>
      </div>
    
  );
}

export default Note;
