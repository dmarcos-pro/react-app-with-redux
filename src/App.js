import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import Form from "./component/form";
import TaskList from "./component/tasklist";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Form />
        <TaskList />
      </div>
    </Provider>
  );
}

export default App;