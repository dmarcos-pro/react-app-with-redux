import React from "react";
import { useDispatch } from "react-redux";
import { removeTask } from "../actions/taskAction";

const Task = (props) => {
  const dispatch = useDispatch();
  return (
    <div className="task" id={'task-' + props.id}>
      <p>{props.title}</p>
      <p>{props.content}</p>
      <button onClick={() => { dispatch(removeTask(props.id)); }}>Remove</button>
    </div>
  );

};

export default Task;