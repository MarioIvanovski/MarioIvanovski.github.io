const pricePerPhone = 119.95;
const quantity = 30;
const taxRate = 0.05;
const totalPrice = pricePerPhone * quantity * (1 + taxRate);
console.log("Total Price including tax: $" ,totalPrice.toFixed(2));