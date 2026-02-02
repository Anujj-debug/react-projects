import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
import TodoItems from "./components/todoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import { useState } from "react";
import "./App.css";

function App() {
  
  const [todoItems , setTodoItems] = useState([]);

  const handleNewItem = (itemName , itemDueDate) => {
    
    setTodoItems((currValue) => [
       ...currValue , {name : itemName , dueDate : itemDueDate}]
    );
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter(item => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  }

  return (
    <center class="todo-container">
      <AppName />
      <AddTodo onNewItem = {handleNewItem}/>
      {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
      <TodoItems todoItems={todoItems} onDeleteClick = {handleDeleteItem}></TodoItems>
      
    </center>
  );
}

export default App;
