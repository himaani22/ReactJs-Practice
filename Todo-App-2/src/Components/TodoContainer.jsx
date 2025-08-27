import TodoItem from './TodoItem.jsx';
const TodoContainer = ({todoItems , onDeleteClick}) => {
return (
  <div className='item-container'>
{todoItems.map((item) => (
<TodoItem TodoName = {item.name} TodoDate = {item.duedate} 
onDeleteClick = {onDeleteClick}
></TodoItem>))}
      
      </div>
)
}
export default TodoContainer;