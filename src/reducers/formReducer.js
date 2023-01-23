import { ADD_TASK, REMOVE_TASK } from "../actionTypes/actionTypes";

const initialState = {
  task: []
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        task: [...state.task, action.payload]
      };
    
    case REMOVE_TASK:
      return {
        task: state.task.filter(({ id }) => id !== action.payload)
      }
    
    default:
      return state;
  }
};
export { formReducer };