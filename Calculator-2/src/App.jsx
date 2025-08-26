import styles from './App.module.css'
import Display from './Components/Display.jsx'
import ButtonContainer from './Components/ButtonContainer.jsx'
import {useState} from 'react'
function App() {

const [calcVal , setCalcVal] = useState("")
const onButtonClick =  (buttonText) => {
  if (buttonText === 'C'){
 setCalcVal ("");
  } else if (buttonText === '='){
const result = eval(calcVal) // Using eval to compute the result
setCalcVal(result);
  }
  else {
    const newDisplayValue = (calcVal + buttonText)
    setCalcVal(newDisplayValue)
  }
}
return <>
<div className={styles.calc}>
  <h1>Calculator</h1>
</div>
  <div className={styles.calculator}>
   <Display displayValue = {calcVal}></Display>
   <ButtonContainer onButtonClick = {onButtonClick}></ButtonContainer>
  </div>

</>}
export default App;
