import { combineReducers } from 'redux';
import { taskReducer } from "./redTask";
import { activeTaskReducer } from "./redActiveTask";


const rootReducer = combineReducers({
	taskReducer: taskReducer,
	activeTaskReducer: activeTaskReducer
});

export default rootReducer;