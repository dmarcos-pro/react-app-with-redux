import { ADD_TASK, REMOVE_TASK, ACTIVE_TASK, REMOVE_ACTIVE_TASK } from "../actionTypes/actionTypes";

const addTask = (id, title, content) => {
  return {
    type: ADD_TASK,
    payload: {id, title, content}
  }
}
const removeTask = (id) => {
  return {
    type: REMOVE_TASK,
    payload: id
  }
}
const activeTask = (id, title, content) => {
  return {
    type: ACTIVE_TASK,
    payload: {id, title, content}
  }
}
const removeActiveTask = () => {
  return {
    type: REMOVE_ACTIVE_TASK
  }
}



export { addTask, removeTask, activeTask, removeActiveTask };