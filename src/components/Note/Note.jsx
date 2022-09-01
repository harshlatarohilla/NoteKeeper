import React from "react";
import "./styles.css";

function Note({head,body}) {
  return (
    <div className="note-div">
      <h3 className="note-head">{head}</h3>
      <p className="note-body">{body}</p>
    </div>
  );
}

export default Note;
