import AppName from './Components/AppName.jsx';
import AddTodo from './Components/AddTodo.jsx';
import TodoContainer from './Components/TodoContainer.jsx';
import './App.css';

function App() {
  const todoItemss = [{
    name: 'Buys Coffee',
    date: '22/8/2009' } , 
    {
      name: 'Goes to Clg',
      date: '22/9/2015'
    },
    {
      name: 'Goes to Market',
      date: '15/10/2023'
    }
  ]
  return (
    

    
    <center className="todo-container">
     <AppName />
      <AddTodo /> 
      <TodoContainer todoItems = {todoItemss}></TodoContainer>
  
      
    </center>
  );
}

export default App;