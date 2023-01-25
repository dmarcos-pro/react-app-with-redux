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
        <aside><Form /></aside>
        <div>
          <div>
            <TaskList />
          </div>
          <div>
            <ActiveTask />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;