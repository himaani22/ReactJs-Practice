import AppName from './Components/AppName.jsx';
import AddTodo from './Components/AddTodo.jsx';
import TodoList1 from './Components/TodoList1.jsx'; 
import TodoList2 from './Components/TodoList2.jsx';
import './App.css';

function App() {
  return (
    <center className="todo-container">
     <AppName />
      <AddTodo /> 
      <div className='item-container'>
<TodoList1 /> 
  <TodoList2 />
      </div>
      
    </center>
  );
}

export default App;