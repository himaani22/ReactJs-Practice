

import Fooditems from "./Components/Fooditems";
import ErrorMsg from "./Components/ErrorMsg";
import './App.css';
import Container from "./Components/Container";
import FoodInput from "./Components/FoodInput";
import { useState } from "react";
function App() {
 // return <react.Fragment>
 // <div> Healthy Foods </div>                     //FRAGMENTS
//  <ul class="list-group">
//  <li class="list-group-item">Rice</li>
  //<li class="list-group-item">Dal</li>
 // <li class="list-group-item">Salad</li>
 // <li class="list-group-item">Vegetables</li>
 // <li class="list-group-item">Sprouts</li>
 // </ul>
// </react.Fragment>



//let textStateArr = useState("Food item entered by user");          //State Hook
//let textToShow = textStateArr[0];
//let setTextState = textStateArr[1];

//or we can write in a single line as below
// let [textToShow , setTextState] = useState();
 let [foodItems , setFoodItems] = useState([ ]);

//console.log(`Current value of TextState = ${textToShow}`);



const onKeyDown = (event) =>{                                // Here it is passing from parent to child using event object
  if (event.key === 'Enter'){
let newFoodItem = event.target.value;
event.target.value = ""; // Clear the input field after adding the item
setFoodItems([...foodItems , newFoodItem]);   //Spread Operator

console.log(`New food item entered is ${newFoodItem}`);
  }
};
  
//  console.log(event)       
// setTextState(event.target.value);
//};  
//  let foodItems = [];

// if(foodItems.length === 0){
//  return <h1>I am Hungry</h1>      //Conditional Rendering using IF-Else
 // }

return  (
<>
<Container>                                       
<h1>Healthy Foods</h1>
   
<FoodInput handleKeyDown={onKeyDown}> </FoodInput>   
<ErrorMsg items = {foodItems}></ErrorMsg>       
<Fooditems items = {foodItems}></Fooditems>
</Container>   



</>
);
}

export default App;
