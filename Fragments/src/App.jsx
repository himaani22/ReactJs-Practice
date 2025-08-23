import react from 'react'

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

 let foodItems = ["Dal" , "Rice" , "Salad" , "Vegetables" , "Sprouts" , "Fruits"]       //MAPS

//  let foodItems = [];

// if(foodItems.length === 0){
//  return <h1>I am Hungry</h1>      //Conditional Rendering using IF-Else
 // }

return  <>                                          
<h1>Healthy Foods</h1>
{foodItems.length === 0 ? <h2>I am still Hungry</h2>: null }                     
<ul className="list-group">
  {foodItems.map((item) => ( 
    <li key={item} className = "list-group-item">{item}</li> 
  ) )}
</ul>
</>

}

export default App;
