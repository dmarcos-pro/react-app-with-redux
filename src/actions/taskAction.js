import { ADD_TASK, REMOVE_TASK } from "../actionTypes/actionTypes";

const addTask = (id, title, content) => {
  return {
    type: ADD_TASK,
    payload: {id, title, content}
  }
}
const removeTask = (id) => {
  console.log(id);
  return {
    type: REMOVE_TASK,
    payload: id
  }
}


export { addTask, removeTask };