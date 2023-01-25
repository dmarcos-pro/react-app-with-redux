import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTask, removeActiveTask } from "../actions/taskAction";


const ActiveTask = () => {
    const dispatch = useDispatch();
    const store = useSelector((store) => store);
    
    const activeTask = store.activeTaskReducer.activeTask.map( (task) =>
    <div key={task.id}>
      <div id={task.id}>{task.title}</div>
      <button onClick={() => { dispatch(removeTask(task.id)); dispatch(removeActiveTask()) }}>Remove</button>
    </div>
      
    );
  
  return (
    <div className="active-task">
      {activeTask}
    </div>
  );

};

export default ActiveTask;