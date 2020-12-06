import React, { useState } from "react";

import List from "./components/List";
import TaskForm from "./components/TaskForm";

import "./index.css";

import { NoteRo } from "./dto/apiDto";

function App(): JSX.Element {
  const [taskList, setTaskList] = useState<NoteRo[]>([]);

  return (
    <div className="app">
      <div className="title">TODO LIST</div>
      <div className="taskPanel">
        <TaskForm taskList={taskList} setTaskList={setTaskList} />
        <List taskList={taskList} setTaskList={setTaskList} />
      </div>
    </div>
  );
}

export default App;
