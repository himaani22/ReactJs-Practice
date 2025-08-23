import TodoItem from './TodoItem.jsx';
const TodoContainer = ({todoItems}) => {
return (
  <div className='item-container'>
{todoItems.map((item) => (
<TodoItem TodoName = {item.name} TodoDate = {item.date} ></TodoItem>))}
      
      </div>
)
}
export default TodoContainer;