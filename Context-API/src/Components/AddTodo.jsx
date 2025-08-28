// With UseState code

/*import { useState } from "react";
import { MdAddComment } from "react-icons/md";

function AddTodo ({onNewItem}) {
  
const [todoName , setTodoName] = useState('');                //state variable
const [dueDate , setdueDate] = useState('');

const handleNameChange =  (event) => {                          //Method call
setTodoName(event.target.value);
}
const handleDateChange =  (event) => {
setdueDate(event.target.value);
}

const handleAddButtonClick = (event) => {
  event.preventDefault();                                      //to prevent reloading of page
onNewItem(todoName , dueDate);
setdueDate("");
setTodoName("");
}

return  <div className="container ">
  <form className="row kg-row"   onSubmit={handleAddButtonClick}  >
    <div className="col-6"><input type="text" placeholder="Enter Todo here" value = {todoName}  onChange={handleNameChange}/></div>
    <div className="col-4"><input type="date" value = {dueDate} onChange={handleDateChange} /> </div>
    <div className="col-2"><button type="submit" className="btn btn-success kg-button"
     
    ><MdAddComment /></button></div>
  </form>
  </div>
}
export default AddTodo;  */


// With useRef code


import { useRef} from "react";
import { MdAddComment } from "react-icons/md";
import { useContext } from "react";
import { TodoItemContext } from "../Store/todo-items-store";
function AddTodo ({onNewItem}) {
  
const {addNewItem} = useContext(TodoItemContext);
const todoNameElement = useRef();
const todoDateElement = useRef();


const handleAddButtonClick = (event) => {
  event.preventDefault();                                      //to prevent reloading of page
  const todoName = todoNameElement.current.value;
  const dueDate = todoDateElement.current.value;

  todoNameElement.current.value = "";
  todoDateElement.current.value = "";
addNewItem(todoName , dueDate);

}

return  <div className="container ">
  <form className="row kg-row"   onSubmit={handleAddButtonClick}  >
    <div className="col-6"><input type="text"  ref={todoNameElement} placeholder="Enter Todo here" /></div>
    <div className="col-4"><input type="date"  ref={todoDateElement}  /> </div>
    <div className="col-2"><button type="submit" className="btn btn-success kg-button"
     
    ><MdAddComment /></button></div>
  </form>
  </div>
}
export default AddTodo;