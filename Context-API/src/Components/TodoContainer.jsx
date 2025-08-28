import { useContext } from 'react';
import { TodoItemContext } from '../Store/todo-items-store.jsx';

import TodoItem from './TodoItem.jsx';

const TodoContainer = ({onDeleteClick}) => {

const {todoItems , deleteItem} = useContext(TodoItemContext);


return (
  <div className='item-container'>
{todoItems.map((item) => (
<TodoItem key= {item.name} TodoName = {item.name} TodoDate = {item.duedate} 
onDeleteClick = {deleteItem}
></TodoItem>))}
      
      </div>
)
}
export default TodoContainer;