import React, { useEffect } from "react";
import { AxiosResponse } from "axios";
import Requester from "../../services/apiSDK";

import { NoteRo } from "../../dto/apiDto";
import Task from "../Task";

import "./index.css";

function List(props: {
  taskList: NoteRo[];
  setTaskList: (val: NoteRo[]) => void;
}) {
  useEffect(() => {
    async function loadTask() {
      const allTasks: AxiosResponse<NoteRo[]> = await Requester.getNotes();
      if (allTasks.data) props.setTaskList(allTasks.data);
    }
    loadTask();
  }, []);

  return (
    <div className="taskList">
      {props.taskList.map((task) => (
        <Task task={task} />
      ))}
    </div>
  );
}

export default List;
