import React from "react";
import { useDispatch } from "react-redux";
import { activeTask } from "../actions/taskAction";

const Task = (props) => {
  const dispatch = useDispatch();
  return (
    <div className="task" id={'task-' + props.id} onClick={() => { dispatch(activeTask(props.id, props.title, props.content)); }}>
      <p>{props.title}</p>
    </div>
  );

};

export default Task;