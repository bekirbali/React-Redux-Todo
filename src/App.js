import "./App.scss";
import { Provider } from "react-redux";
import store from "./app/store";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <Provider store={store}>
      <TodoForm />
      <TodoList />
    </Provider>
  );
};

export default App;
