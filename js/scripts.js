//Business Logic
function Order(name, size, toppings, delivery){
  this.name = name;
  this.size = size;
  this.toppings = toppings;
  this.delivery = true;
}

Order.prototype.orderCost = function(price){
  if (this.size === "slice"){
    price -= 8;
  } else if (this.size === "large") {
    price += 4;
  }
  if (this.toppings.length > 0) {
    price += (this.toppings.length / 2);
  }
  console.log("length: "+this.toppings.length);
  console.log("price: "+price);
  return price;
}

//User Logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var price = 12;
    var newName = $("#order_name").val();
    console.log(newName);
    var newSize = $("input:radio[name=size]:checked").val();
    console.log(newSize);
    var newToppings = $("input:checkbox[name=toppings]:checked").map(function () {
      return this.value;
    }).get();
    console.log(newToppings);

    // console.log("array length "+parseInt(Object.keys(newToppings).length));

    var newDeliv = $("input:radio[name=delivery]:checked").val();
    console.log(newDeliv);
    var newOrder = new Order(newName, newSize, newToppings, newDeliv)
    console.log(newOrder);


    newOrder.orderCost(price);
  })
});
