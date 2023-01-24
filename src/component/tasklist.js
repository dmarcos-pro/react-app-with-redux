import React from "react";
import { useSelector } from "react-redux";
import Task from "./task";


const TaskList = () => {
    const store = useSelector((store) => store);
    console.log(store);
    const taskList = store.taskReducer.task.map( (task) =>
      <Task
        id={task.id}
        key={task.id}
        title={task.title}
        content={task.content}
      />
      
    );
  
  return (
    <div className="task-list">
      {taskList}
    </div>
  );

};

export default TaskList;