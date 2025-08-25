import styles from './FoodInput.module.css';
const foodInput = ({handleOnChange}) => { 
//    const handleOnChange = (event) =>{ console.log(event.target.value)}   // Here it is passing from child to parent using event object


    return  <input type="text" className={styles.foodInput}  placeholder="Enter food item" 
    onChange = {handleOnChange}
    />
    
}
export default foodInput;