import React from "react";

import { NoteDto } from "../../dto/apiDto";

import "./index.css";

function Task(props: { task: NoteDto }) {
  return (
    <div className="task" key={props.task.title}>
      <p className="taskName">{props.task.title}</p>
      <p className="taskContent">{props.task.content}</p>
    </div>
  );
}

export default Task;
