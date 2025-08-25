import React , {useState} from "react";
import Items from "./Items";
const Fooditems = ({items}) =>{            //props destructuring
  //   let foodItems = ["Dal" , "Rice" , "Salad" , "Vegetables" , "Sprouts" , "Fruits"] 

  let [activeFoodItem , setActiveFoodItem] = useState([]);  //State Hook to highlight the active item
  let onBuyButton = (item , event ) => {
   let  newItems = [...activeFoodItem , item];  //spread operator
    setActiveFoodItem(newItems);
  }

return (<ul className="list-group">
  {items.map((item) => ( 
    <Items key={item} foodItem={item} 
    brought = {activeFoodItem.includes(item) }   //Conditional Rendering using Ternary Operator
    handleBuyButton = {(event) => onBuyButton(item , event)}       //Event Handling using Arrow Function
    ></Items>
  ) )}
</ul>
)}
export default Fooditems;