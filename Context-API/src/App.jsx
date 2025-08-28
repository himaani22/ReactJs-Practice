import AppName from './Components/AppName.jsx';
import AddTodo from './Components/AddTodo.jsx';
import TodoContainer from './Components/TodoContainer.jsx';
import { useState } from 'react';
import WelcomeMsg from './Components/WelcomeMsg.jsx';
import './App.css';
import { TodoItemContext } from './Store/todo-items-store.jsx';


function App() {
  
const [todoitem , setTodoitem] = useState([]);

const addNewItem = (itemName , itemDueDate) =>{

  const newTodoItems = [...todoitem , {
      name: itemName, 
      duedate: itemDueDate,
    }]; 
    setTodoitem(newTodoItems);
}

const deleteItem = (todoItemName) =>{
  const newTodoItems = todoitem.filter(item => item.name !== todoItemName);
setTodoitem(newTodoItems);
}


  return (
    
    <TodoItemContext.Provider value={{ todoItems : todoitem,
    addNewItem : addNewItem,
    deleteItem : deleteItem }}
    >
    
    <center className="todo-container">
     <AppName />
      <AddTodo /> 
    <WelcomeMsg ></WelcomeMsg>
      <TodoContainer ></TodoContainer>
  
      
    </center>
    </TodoItemContext.Provider>
  );
}

export default App;