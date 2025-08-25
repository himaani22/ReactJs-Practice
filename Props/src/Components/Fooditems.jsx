import Items from "./Items";
const Fooditems = ({items}) =>{            //props destructuring
  //   let foodItems = ["Dal" , "Rice" , "Salad" , "Vegetables" , "Sprouts" , "Fruits"] 
return (<ul className="list-group">
  {items.map((item) => ( 
    <Items key={item} foodItem={item} 
    hadleBuyButton = { () => console.log(`You brought ${item}`)}           //Event Handling using Arrow Function
    ></Items>
  ) )}
</ul>
)}
export default Fooditems;