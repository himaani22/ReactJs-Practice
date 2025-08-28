import { useContext } from 'react';
import { TodoItemContext } from '../Store/todo-items-store';
import styles from './WelcomeMsg.module.css'

const welcomeMsg = () =>{

    const ContextObj = useContext (TodoItemContext);
    const todoItems = ContextObj.todoItems;
    return todoItems.length === 0 && <p className = {styles.welcome}>Enjoy Your Day</p>
}
export default welcomeMsg;