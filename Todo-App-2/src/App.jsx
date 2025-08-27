import AppName from './Components/AppName.jsx';
import AddTodo from './Components/AddTodo.jsx';
import TodoContainer from './Components/TodoContainer.jsx';
import { useState } from 'react';
import WelcomeMsg from './Components/WelcomeMsg.jsx';
import './App.css';

function App() {
  
const [todoitem , setTodoitem] = useState([]);

const handleNewItem = (itemName , itemDueDate) =>{

  const newTodoItems = [...todoitem , {
      name: itemName, 
      duedate: itemDueDate,
    }]; 
    setTodoitem(newTodoItems);
}

const handleDeleteItem = (todoItemName) =>{
  const newTodoItems = todoitem.filter(item => item.name !== todoItemName);
setTodoitem(newTodoItems);
}

  return (
    
    
    
    <center className="todo-container">
     <AppName />
      <AddTodo onNewItem = {handleNewItem}/> 
     {todoitem.length === 0 &&<WelcomeMsg />}
      <TodoContainer todoItems = {todoitem}
      onDeleteClick = {handleDeleteItem}
      ></TodoContainer>
  
      
    </center>
  );
}

export default App;