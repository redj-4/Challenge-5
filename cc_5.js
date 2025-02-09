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

//Task 5: Filter Method 
const inventory = [5, 0, 12, 8, 0]; // Declare an array with product quantities

// Use the .filter() method to remove products with zero stock
const availableProducts = inventory.filter(quantity => quantity > 0);

// Log the filtered array to the console
console.log(availableProducts); // Output: [5, 12, 8]

//Task 6: 
const sales = [500, 300, 200, 400]; //Declaring an arrray for sales

// Use the .reduce() method to calculate the total revenue
const totalRevenue = sales.reduce((total, sale) => total + sale, 0);

// Log the total revenue to the console
console.log(totalRevenue); // Output: 1400

//Task 7: find() method
const customers = ["Alice", "Bob", "Charlie", "David"]; //declare array for customers

// Use the .find() method to locate the customer "Charlie"
const foundCustomer = customers.find(customer => customer === "Charlie");

// Log the result to the console
console.log(foundCustomer); // Output: "Charlie"

//Task 8: Function Declaration 
function calculateTax(amount, taxRate) {            //--> function for tax
  return amount * taxRate;
}

// Example usage:
const amount = 150;        // Example amount
const taxRate = 0.1;       // Example tax rate (10%)

// Calculate the tax
const tax = calculateTax(amount, taxRate);

// Log the calculated tax using a template literal
console.log(`For an amount of $${amount} at a tax rate of ${taxRate * 100}%, the calculated tax is $${tax}.`);