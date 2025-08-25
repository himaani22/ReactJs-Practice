
const Items = (props ) =>{
    const {hadleBuyButton} = props;    //props destructuring
    return (
        <>
    <li className = "list-group-item  kg-items" >{props.foodItem}
         <button type="button" className= "btn btn-info" 
       //   onClick = { () => console.log(`You brought ${props.foodItem}`)}           //Here it is passing from child to parent using Arrow Function
         onClick = {hadleBuyButton}                                             // Here it is passing from [parent to child using function name]
         >Buy</button>
        
    </li>

    </>
)}
export default Items;