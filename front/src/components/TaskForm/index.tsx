import React, { useState } from "react";
import Requester from "../../services/apiSDK";

import "./index.css";

import { NoteDto, NoteRo } from "../../dto/apiDto";

function TaskForm(props: {
  taskList: NoteRo[];
  setTaskList: (val: NoteRo[]) => void;
}): JSX.Element {
  const [task, setTask] = useState<NoteDto>({ title: "", content: "" });

  return (
    <div className="taskForm">
      <div className="formPart">
        <input
          value={task.title}
          type="text"
          onChange={(event) => setTask({ ...task, title: event.target.value })}
          placeholder="Choose name of Task"
        />
        <input
          value={task.content}
          type="text"
          onChange={(event) =>
            setTask({ ...task, content: event.target.value })
          }
          placeholder="Choose description of Task"
        />
      </div>
      <button
        className="formButton"
        onClick={async () => {
          if (task.title !== "" && task.content !== "") {
            const newTask = await Requester.sendNote(task);
            if (newTask.data)
              props.setTaskList([...props.taskList, newTask.data]);
            setTask({ title: "", content: "" });
          }
        }}
        type="button"
      >
        Add Task
      </button>
    </div>
  );
}

export default TaskForm;
