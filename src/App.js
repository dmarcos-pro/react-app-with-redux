import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import Form from "./component/form";
import TaskList from "./component/tasklist";
import ActiveTask from "./component/activeTask";

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