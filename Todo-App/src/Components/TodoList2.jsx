function TodoList2() {
  let TodoName = "Buys Milk";
    let TodoDate = "22/09/2003";
return  <div class="container ">
    <div class="row kg-row">
    <div class="col-6">{TodoName}</div>
    <div class="col-4">{TodoDate}</div>
    <div class="col-2"><button type="button" class="btn btn-danger kg-button">Danger</button></div>
  </div>

 </div>
}
export default TodoList2;