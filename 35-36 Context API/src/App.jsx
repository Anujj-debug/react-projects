import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
import TodoItems from "./components/todoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import TodoItemsContextProvider, { TodoItemsContext } from "./store/todo-items-store";
import "./App.css";
 

function App() {
  
  return (
    <TodoItemsContextProvider>
      <center class="todo-container">
        <AppName />
        <AddTodo  />
        <WelcomeMessage ></WelcomeMessage>
        <TodoItems></TodoItems>
      </center>
    </TodoItemsContextProvider>
  );
}

export default App;
