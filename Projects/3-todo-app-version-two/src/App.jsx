import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
import TodoItems from "./components/todoItems";
import "./App.css";

function App() {
  const todoItems = [
    {
      name : "Buy Milk" ,
      dueDate : "4/10/2023"
    } ,
    {
      name : "Go to College" ,
      dueDate : "4/10/2023"
    },
    {
      name : "Like this vid" ,
      dueDate : "4/110/2023"
    }
  ];
  return (
    <center class="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems}></TodoItems>
      
    </center>
  );
}

export default App;
