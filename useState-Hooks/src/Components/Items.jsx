
const Items = (props ) =>{
    const {handleBuyButton , foodItem , brought} = props;    //props destructuring
   
    return (
        <>
    <li className ={` list-group-item  kg-items ${brought ? " active" : "" }`}>{foodItem}
         <button type="button" className= "btn btn-info" 
       //   onClick = { () => console.log(`You brought ${props.foodItem}`)}           //Here it is passing from child to parent using Arrow Function
         onClick = {handleBuyButton}                                             // Here it is passing from [parent to child using function name]
         >Buy</button>
        
    </li>

    </>
)}
export default Items;

