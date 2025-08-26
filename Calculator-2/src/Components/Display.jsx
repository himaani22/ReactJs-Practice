import styles from './Display.module.css'
const display  = ({displayValue}) =>{
    return (
 <input type="text" className = {styles.display} value={displayValue} />
    )
}
export default display;