import "./App.scss";
import { Provider } from "react-redux";
import store from "./store";
import Form from "./component/form";
import TaskList from "./component/taskList";
import ActiveTask from "./component/activeTask";

// CSS


function App() {
  return (
    <Provider store={store}>
      <div>
        <Form />
        <TaskList />
        <ActiveTask />
      </div>
    </Provider>
  );
}

export default App;