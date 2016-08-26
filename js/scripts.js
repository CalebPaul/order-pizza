//Business Logic
function Order(name, size, toppings, delivery){
  this.name = name;
  this.size = size;
  this.toppings = toppings;
  this.delivery = true;
}

Order.prototype.orderCost = function(price){
  price = 10;

}

//User Logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var newName = $("#order_name").val();
    console.log(newName);
    var newSize = $("input:radio[name=size]:checked").val();
    console.log(newSize);
    var newToppings = $("input:checkbox[name=toppings]:checked").val();
    console.log(newToppings);
    var newDeliv = $("input:radio[name=delivery]:checked").val();
    console.log(newDeliv);
    var newOrder = new Order(newName, newSize, newToppings, newDeliv)
    console.log(newOrder);
  })
});
