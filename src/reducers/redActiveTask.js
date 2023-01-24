import { ACTIVE_TASK, REMOVE_ACTIVE_TASK } from "../actionTypes/actionTypes";


const initialStateActiveTask = {
  activeTask: []
};

const activeTaskReducer = (state = initialStateActiveTask, action)  => {
  switch (action.type) {
    case ACTIVE_TASK:
      return {
        activeTask: [action.payload]
      }
    case REMOVE_ACTIVE_TASK:
      return {
        activeTask: []
      }
    
    default:
      return state;
  }
};
export { activeTaskReducer };