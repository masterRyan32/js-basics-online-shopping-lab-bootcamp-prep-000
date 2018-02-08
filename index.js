var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemPrice = Math.floor(Math.random() * 100 + 1)
  var itemName = {[item] : itemPrice}
  cart.push(itemName);
    console.log(`${item} has been added to your cart.`)
    return cart
}



function viewCart() {
  var array = []
 
  for(var i = 0; i < cart.length; i++){
    var item = Object.keys(cart[i])
    var price = Object.values(cart[i])
    array.push(`${item} at $${price}`)
    
      // array.push(keys)
      // arrayPrice.push(values)
  }
  if(cart.length === 0 ) {
    console.log('Your shopping cart is empty.')   
  }
  else if(cart.length === 1) {
    console.log(`In your cart, you have ${array[0]} at $${arrayPrice[0]}.`)
  }
  else if(cart.length === 2) {
    console.log(`In your cart, you have ${array[0]} at $${arrayPrice[0]} and ${array[1]}.`)
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
