import { useState } from "react";
function AddTodo ({onNewItem}) {
  
const [todoName , setTodoName] = useState('');                //state variable
const [dueDate , setdueDate] = useState('');

const handleNameChange =  (event) => {                          //Method call
setTodoName(event.target.value);
}
const handleDateChange =  (event) => {
setdueDate(event.target.value);
}

const handleAddButtonClick = () => {
onNewItem(todoName , dueDate);
setdueDate("");
setTodoName("");
}

return  <div className="container ">
  <div className="row kg-row">
    <div className="col-6"><input type="text" placeholder="Enter Todo here" value = {todoName}  onChange={handleNameChange}/></div>
    <div className="col-4"><input type="date" value = {dueDate} onChange={handleDateChange} /> </div>
    <div className="col-2"><button type="button" className="btn btn-success kg-button"
    onClick={handleAddButtonClick}                //anonymous function
    >Add</button></div>
  </div>
  </div>
}
export default AddTodo;