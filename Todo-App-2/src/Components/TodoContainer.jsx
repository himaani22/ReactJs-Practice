import TodoItem from './TodoItem.jsx';
const TodoContainer = ({todoItems , onDeleteClick}) => {
return (
  <div className='item-container'>
{todoItems.map((item) => (
<TodoItem key={item.name} TodoName = {item.name} TodoDate = {item.duedate} 
onDeleteClick = {onDeleteClick}
></TodoItem>))}
      
      </div>
)
}
export default TodoContainer;