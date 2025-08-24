

import Fooditems from "./Components/Fooditems";
import ErrorMsg from "./Components/ErrorMsg";
import './App.css';
import Container from "./Components/Container";
import FoodInput from "./Components/FoodInput";
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

let foodItems = ["Dal" , "Rice" , "Salad" , "Vegetables" , "Sprouts" , "Fruits" ]       //MAPS

//  let foodItems = [];

// if(foodItems.length === 0){
//  return <h1>I am Hungry</h1>      //Conditional Rendering using IF-Else
 // }

return  (
<>
<Container>                                       
<h1>Healthy Foods</h1>
<ErrorMsg items = {foodItems}></ErrorMsg>     
<FoodInput/>             
<Fooditems items = {foodItems}></Fooditems>
</Container>   

<Container>
  <p>Above are the list of healthy food items that are good for your health and well-being</p>
</Container>

</>
);
}

export default App;
