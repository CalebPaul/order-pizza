//Business Logic
function Order(name, size, toppings, delivery){
  this.name = name;
  this.size = size;
  this.toppings = toppings;
  this.delivery = delivery;
}

//prototype
Order.prototype.orderCost = function(price){
  if (this.size === "slice"){
    price -= 8;
  } else if (this.size === "large") {
    price += 4;
  }
  if (this.toppings.length > 0) {
    price += (this.toppings.length / 2);
  }
  if (this.delivery === "delivery") {
    price += 2;
  }
  console.log("total price: "+price);
  return price;
}

//User Logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var price = 12;
    var newName = $("#order_name").val();
    var newSize = $("input:radio[name=size]:checked").val();
    var newToppings = $("input:checkbox[name=toppings]:checked").map(function () {
      return this.value;
    }).get();
    var newDeliv = $("input:radio[name=delivery]:checked").val();
    var newOrder = new Order(newName, newSize, newToppings, newDeliv)
    console.log(newOrder);
    newOrder.orderCost(price);
  })
});
