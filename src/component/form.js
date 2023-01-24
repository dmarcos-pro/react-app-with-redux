import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
//import uuid from 'react-uuid';
import { addTask } from "../actions/taskAction";

const Form = () => {
  const dispatch = useDispatch();
  const store = useSelector((store) => store);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    let higher = 0;
    store.taskReducer.task.map( (task) => {
      higher = task.id > higher ? task.id : 0;
      return higher;
    });
    const id = higher +1;

    dispatch(addTask(id, title, content));
    setTitle('');
    setContent('');
  }
  
  return (
    <div className="form">
      <h2>Créer une nouvelle tâche</h2>
      
      <form onSubmit={handleSubmit}>
        <input  id="title" type="text" value={title}
                onChange={(e) => setTitle(e.target.value)} />
        <textarea id="content" value={content}
                  onChange={(e) => setContent(e.target.value)} />
        <button type="submit">OK</button>
      </form>
    </div>
  );
};

export default Form;