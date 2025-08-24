
const Items = (props) =>{
    return (
        <>
    <li className = "list-group-item  kg-items" >{props.foodItem}
         <button type="button" className= "btn btn-info" 
          onClick = { () => console.log(`You brought ${props.foodItem}`)}
         >Info</button>
        
    </li>

    </>
)}
export default Items;