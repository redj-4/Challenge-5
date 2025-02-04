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