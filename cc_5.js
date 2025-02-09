//Task 1: Object Properties
let customer = {
name: "John Doe", age: 35, email: "john.doe@email.com"
}
console.log(customer)

//Task 2: Object Methods
const order = {
    orderId: 12345, totalAmount: 150, status: "Processing",
    displayOrder() {
        console.log(`Order ID: ${this.orderId}, Total Amount: ${this.totalAmount}, Status: ${this.status}`);
      }
};

order.displayOrder()

//Task 3: Array Manipulation
const cartItems = ['Eggs','Milk','Yogurt'];
cartItems.push('Bread'); //Adds a new item
cartItems.pop(); //Removes the last item
cartItems.unshift('Blackberries'); //adds a item at the front of the array
cartItems.shift(); //Removes the first item
console.log(cartItems);

//Task 4: Math Method
const prices = [100,200,300]; //declare an array of prices

const discountedPrices = prices.map(price => price * 0.9); // Use the .map() method to apply a 10% discount to each price

// Log the new discounted prices to the console
console.log(discountedPrices); // Output: [90, 180, 270]